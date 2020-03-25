import React from "react";
import styles from "./Months.module.scss";
import { Icon } from "./Icon";
import { range } from "remeda";
import cn from "classnames";

export type MonthsProps = {
  iconUrl: string;
  highlights: number[];
  highlightBackgroundColor: string;
};

export const Months: React.FunctionComponent<MonthsProps> = ({
  iconUrl,
  highlights,
  highlightBackgroundColor,
}) => (
  <div className={styles.month}>
    <Icon className={cn(styles.monthCell, styles.icon)} url={iconUrl} />
    {range(1, 13).map((n) => (
      <div
        key={n}
        className={styles.monthCell}
        style={
          highlights.includes(n)
            ? { backgroundColor: highlightBackgroundColor }
            : {}
        }
      >
        {n}
      </div>
    ))}
  </div>
);
