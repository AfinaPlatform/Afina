import { ReactNode } from "react";
import css from "./h3.module.scss";

type H3Props = {
  children: ReactNode;
};

export default function H3({ children }: H3Props) {
  return <h3 className={css.root}>{children}</h3>;
}
