import React from "react";
import styles from "./App.module.scss";
import { Card, Checkbox, Image } from "semantic-ui-react";
import { critterpedia } from "./data";
import { range } from "remeda";
import cn from "classnames";

function App() {
  return (
    <div>
      <h1>図鑑</h1>
      <Card.Group>
        {critterpedia.map((critter) => (
          <Card key={critter.name}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={`/critter_icon/${critter.type}_${critter.no}.jpg`}
              />
              <Card.Header>{critter.name}</Card.Header>
              <Card.Meta>
                <span>No.{critter.no}</span>&nbsp;
                <span>{critter.price}ベル</span>
              </Card.Meta>
              <Card.Description>
                <div className={styles.month}>
                  <span className={cn(styles.monthCell, styles.iconNorth)}/>
                  {range(1, 13).map((n) => (
                    <div
                      key={n}
                      className={cn(
                        styles.monthCell,
                        critter.monthInNorth.includes(n) && styles.north
                      )}
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <div className={styles.month}>
                  <span className={cn(styles.monthCell, styles.iconSouth)}/>
                  {range(1, 13).map((n) => (
                    <div
                      key={n}
                      className={cn(
                        styles.monthCell,
                        critter.monthInSouth.includes(n) && styles.south
                      )}
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <div className={styles.hour}>
                  {range(0, 24).map((n) => (
                    <div key={n} className={cn(styles.hourCell, styles[n])}>
                      {n}
                    </div>
                  ))}
                </div>
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
