import { ReactNode } from "react";
import css from "./article-container.module.scss";

type ArticleContainerProps = {
  children: ReactNode;
};

export default function ArticleContainer({ children }: ArticleContainerProps) {
  return <article className={css.root}>{children}</article>;
}
