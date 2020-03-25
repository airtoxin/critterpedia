import React from "react";
import { Card, Checkbox, Image } from "semantic-ui-react";
import { critterpedia } from "./critterpedia";
import { Months } from "./Months";
import { Hours } from "./Hours";
import styles from "./App.module.scss";

function App() {
  const current = new Date();
  const month = current.getMonth() + 1;
  const hour = current.getHours();

  return (
    <div>
      <h1>図鑑</h1>
      <Card.Group>
        {critterpedia.map((critter) => (
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
                  highlights={critter.monthInNorth}
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
