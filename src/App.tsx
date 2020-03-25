import React, { useMemo, useState } from "react";
import { Card, Checkbox, Dropdown, Form, Image } from "semantic-ui-react";
import { critterpedia } from "./critterpedia";
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
        .filter((critter) => (filterUncaught ? true : true)),
    [
      currentHour,
      currentMonth,
      filterCatchable,
      filterNorthSouth,
      filterUncaught,
    ]
  );

  return (
    <div>
      <div>
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
              label="今捕れる生物だけ表示"
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
      </div>
      <h1>図鑑</h1>
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
              <Checkbox toggle label="捕まえた！" />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default App;
