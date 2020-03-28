import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Checkbox, Dropdown, Form, Image } from "semantic-ui-react";
import { Critter, critterpedia, getId } from "./critterpedia";
import styles from "./App.module.scss";
import { Months } from "./Months";
import { Hours } from "./Hours";

function App() {
  const [time, setTime] = useState(new Date().getTime());
  const { current, currentMonth, currentHour } = useMemo(() => {
    const current = new Date(time);
    const currentMonth = current.getMonth() + 1;
    const currentHour = current.getHours();
    return { current, currentMonth, currentHour };
  }, [time]);
  useEffect(() => {
    const id = setInterval(() => {
      if (new Date().getHours() !== currentHour) {
        setTime(new Date().getTime());
      }
    }, 1000);
    return () => clearInterval(id);
  }, [currentHour]);
  const [critterType, setCritterType] = useState<null | "bug" | "fish">(null);
  const [caughtCritters, setCaughtCrittersRaw] = useState<{ [k: string]: 1 }>(
    {}
  );
  const setCaughtCritters = useCallback(
    (critter: Critter) =>
      setCaughtCrittersRaw({ ...caughtCritters, [getId(critter)]: 1 }),
    [caughtCritters]
  );
  const unsetCaughtCritters = useCallback(
    (critter: Critter) => {
      const { [getId(critter)]: _, ...rest } = caughtCritters;
      setCaughtCrittersRaw(rest);
    },
    [caughtCritters]
  );
  useEffect(() => {
    try {
      setCaughtCrittersRaw(
        (
          window.localStorage.getItem("critterpedia_caught")?.split(",") ?? []
        ).reduce((o, k) => ({ ...o, [k]: 1 }), {})
      );
    } catch (e) {
      console.warn(e);
    }
  }, []);
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "critterpedia_caught",
        Object.keys(caughtCritters).join(",")
      );
    } catch (e) {
      console.warn(e);
    }
  }, [caughtCritters]);
  const [filterNorthSouth, setFilterNorthSouth] = useState<
    null | "north" | "south"
  >(null);
  const [filterCatchable, setFilterCatchable] = useState(false);
  const [filterUncaught, setFilterUncaught] = useState(false);
  const critters = useMemo(
    () =>
      critterpedia
        .filter((critters) =>
          critterType == null ? true : critters.type === critterType
        )
        .filter((critter) => {
          switch (filterNorthSouth) {
            case null: {
              return true;
            }
            case "north": {
              return critter.monthInNorth.includes(currentMonth);
            }
            case "south": {
              return critter.monthInSouth.includes(currentMonth);
            }
            default: {
              return true;
            }
          }
        })
        .filter((critter) =>
          filterCatchable ? critter.hour.includes(currentHour) : true
        )
        .filter((critter) =>
          filterUncaught ? caughtCritters[getId(critter)] !== 1 : true
        ),
    [
      critterType,
      currentHour,
      currentMonth,
      filterCatchable,
      filterNorthSouth,
      filterUncaught,
      caughtCritters,
    ]
  );

  return (
    <div className={styles.container}>
      <Form className={styles.form}>
        <Form.Field>
          <Dropdown
            className={styles.dropdown}
            placeholder="生物の種類"
            selection
            clearable
            options={[
              {
                key: "bug",
                text: "昆虫",
                value: "bug" as const,
              },
              {
                key: "fish",
                text: "魚",
                value: "fish" as const,
              },
            ]}
            onChange={(_event, data) =>
              setCritterType(
                data.value === "" ? null : (data.value as "bug" | "fish")
              )
            }
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            className={styles.dropdown}
            placeholder="自分の地域で捕れる生物だけ表示"
            selection
            clearable
            options={[
              {
                key: "北半球",
                text: "北半球",
                value: "north" as const,
                image: { src: "/north.png" },
              },
              {
                key: "南半球",
                text: "南半球",
                value: "south" as const,
                image: { src: "/south.png" },
              },
            ]}
            onChange={(_event, data) =>
              setFilterNorthSouth(
                data.value === "" ? null : (data.value as "north" | "south")
              )
            }
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            toggle
            label="今の時間捕れる生物だけ表示"
            onChange={(event, data) =>
              setFilterCatchable(data.checked ?? false)
            }
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            toggle
            label="捕まえてない生物だけ表示"
            onChange={(_event, data) =>
              setFilterUncaught(data.checked ?? false)
            }
          />
        </Form.Field>
      </Form>

      <Card.Group stackable>
        {critters.map((critter) => (
          <Card key={`${critter.no}_${critter.name}`} className={styles.card}>
            <Card.Content>
              <Image
                floated="right"
                size="tiny"
                src={`/critter_icon/${critter.no}-${
                  critter.type === "bug" ? critter.no + 92 : critter.no + 12
                }.jpg`}
              />
              <Card.Header>{critter.name}</Card.Header>
              <Card.Meta>
                <p>No.{critter.no}</p>
                <p>
                  {critter.place} {critter.memo}
                </p>
                <p>{critter.price}ベル</p>
              </Card.Meta>
              <Card.Description>
                <Months
                  current={current}
                  iconUrl="/north.png"
                  highlights={critter.monthInNorth}
                  highlightBackgroundColor="#0e8dfe"
                />
                <Months
                  current={current}
                  iconUrl="/south.png"
                  highlights={critter.monthInSouth}
                  highlightBackgroundColor="#fc4c3c"
                />
                <Hours current={current} highlights={critter.hour} />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Checkbox
                toggle
                label="捕まえた！"
                checked={caughtCritters[getId(critter)] === 1}
                onChange={(event, data) =>
                  data.checked
                    ? setCaughtCritters(critter)
                    : unsetCaughtCritters(critter)
                }
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default App;
