import { ReactNode } from "react";
import css from "./icon.module.scss";

type IconProps = {
  children: ReactNode;
};

export default function Icon({ children }: IconProps) {
  return <div className={css.root}>{children}</div>;
}
