import { ReactNode } from "react";
import css from "./list.module.scss";

type ComponentProps = {
  children: ReactNode;
};

function List({ children }: ComponentProps) {
  return (
    <ul className={css.list} data-list>
      {children}
    </ul>
  );
}

function Item({ children }: ComponentProps) {
  return (
    <li className={css.item} data-list-item>
      {children}
    </li>
  );
}

List.Item = Item;

export default List;
