import { ReactNode } from "react";
import css from "./h2.module.scss";

type H2Props = {
  children: ReactNode;
};

export default function H2({ children }: H2Props) {
  return <h2 className={css.root}>{children}</h2>;
}
