import { ReactNode } from "react";
import css from "./p.module.scss";

type PProps = {
  children: ReactNode;
};

export default function P({ children, ...rest }: PProps) {
  return (
    <p {...rest} className={css.root}>
      {children}
    </p>
  );
}
