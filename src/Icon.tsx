import React from "react";
import styles from "./Icon.module.scss";
import cn from "classnames";

export type IconProps = {
  url: string;
};

export const Icon: React.FunctionComponent<
  IconProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
> = ({ url, ...spanProps }) => (
  <span
    {...spanProps}
    className={cn(styles.icon, spanProps.className)}
    style={{ backgroundImage: `url(${url})`, ...spanProps.style }}
  />
);
