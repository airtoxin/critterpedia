import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Checkbox, Container, Dropdown, Form, Image } from "semantic-ui-react";
import { Critter, critterpedia, getId } from "./critterpedia";
import { Months } from "./Months";
import { Hours } from "./Hours";
import styles from "./App.module.scss";

function App() {
  const { current, currentMonth, currentHour } = useMemo(() => {
    const current = new Date();
    const currentMonth = current.getMonth() + 1;
    const currentHour = current.getHours();
    return { current, currentMonth, currentHour };
  }, []);
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
      currentHour,
      currentMonth,
      filterCatchable,
      filterNorthSouth,
      filterUncaught,
      caughtCritters
    ]
  );

  return (
    <Container>
      <Form>
        <Form.Field>
          <Dropdown
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

      <Card.Group>
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

                <p>{critter.price}ベル</p>
                <p>
                  {critter.place} {critter.condition}
                </p>
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
    </Container>
  );
}

export default App;
