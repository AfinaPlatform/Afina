import type { Lesson } from "@/bundles/lessons/types";
import css from "./article-head.module.scss";
import LinkButton from "@/shared/components/link-button";

type ArticleHead = {
  title: Lesson["title"];
};

export default function ArticleHead({ title }: ArticleHead) {
  return (
    <div className={css.root}>
      <div className={css.backLinkWrapper}>
        <LinkButton href="/lessons" data-back-link>
          Back
        </LinkButton>
      </div>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
}
