import React from "react";
import { someFunc } from "./someFunc";

export const Element: React.FC = () => {
  const b = someFunc();
  return <div>{b}</div>;
};
