import { ReactNode } from "react";
import css from "./h1.module.scss";

type H1Props = {
  children: ReactNode;
};

export default function H1({ children }: H1Props) {
  return <h1 className={css.root}>{children}</h1>;
}
