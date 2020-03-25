import React from "react";
import { Card, Checkbox, Image } from "semantic-ui-react";
import { critterpedia } from "./critterpedia";
import { Months } from "./Months";
import { Hours } from "./Hours";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <h1>図鑑</h1>
      <Card.Group>
        {critterpedia.map((critter) => (
          <Card key={critter.name} className={styles.card}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={`/critter_icon/${critter.no}-${critter.type === "bug" ? critter.no + 12 : critter.no + 92}.jpg`}
              />
              <Card.Header>{critter.name}</Card.Header>
              <Card.Meta>
                <span>No.{critter.no}</span>&nbsp;
                <span>{critter.price}ベル</span>
              </Card.Meta>
              <Card.Description>
                <Months
                  iconUrl="/north.png"
                  highlights={critter.monthInNorth}
                  highlightBackgroundColor="#0e8dfe"
                />
                <Months
                  iconUrl="/south.png"
                  highlights={critter.monthInNorth}
                  highlightBackgroundColor="#fc4c3c"
                />
                <Hours highlights={critter.hour} />
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
