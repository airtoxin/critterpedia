import React from "react";
import styles from "./Hours.module.scss";
import { range } from "remeda";
import { VictoryPie, VictoryPieProps } from "victory-pie/es";

export type HoursProps = {
  highlights: number[];
};

const COLORS: { [k in number]: string } = {
  0: "#0d60ab",
  1: "#0d60ab",
  2: "#0d60ab",
  3: "#0d60ab",
  4: "#108eff",
  5: "#108eff",
  6: "#fd8109",
  7: "#fd8109",
  8: "#f6ad0d",
  9: "#f6ad0d",
  10: "#f6ad0d",
  11: "#f6ad0d",
  12: "#f6ad0d",
  13: "#f6ad0d",
  14: "#f6ad0d",
  15: "#f6ad0d",
  16: "#fd8109",
  17: "#fd8109",
  18: "#108eff",
  19: "#108eff",
  20: "#0d60ab",
  21: "#0d60ab",
  22: "#0d60ab",
  23: "#0d60ab",
};

export const Hours: React.FunctionComponent<HoursProps> = ({ highlights }) => {
  const pieProps: (rangeFrom: number, rangeTo: number) => VictoryPieProps = (
    rangeFrom,
    rangeTo
  ) => ({
    data: range(rangeFrom, rangeTo).map((n) => ({
      x: `${n}`,
      y: 1,
      fill: highlights.includes(n) ? COLORS[n] : "#d9d9d9",
    })),
    labelRadius: 110,
    style: {
      data: {
        fill: ({ datum }) => datum.fill,
      },
      labels: {
        fill: "white",
        fontSize: 30,
      },
    },
  });

  return (
    <div className={styles.hour}>
      <VictoryPie {...pieProps(0, 12)} />
      <VictoryPie {...pieProps(12, 24)} />
    </div>
  );
};
