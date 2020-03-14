import React from "react";
import { someFunc } from "./someFunc";

import styles from "./Element.module.scss";

export const Element: React.FC = () => {
  const b = someFunc();
  return <div className={styles.root}>{b}</div>;
};
