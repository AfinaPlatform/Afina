import type { Lesson } from "@/bundles/lessons/types";
import H2 from "@/shared/components/h2";
import H3 from "@/shared/components/h3";
import P from "@/shared/components/p";
import css from "./article-body.module.scss";

type ArticleProps = {
  content: Lesson["content"];
};

export default function ArticleBody({ content }: ArticleProps) {
  return (
    <div className={css.root}>
      {content.map((chunk, i) => {
        const { content, type } = chunk;

        if (type === "header") {
          return <H2 key={i}>{content}</H2>;
        }

        if (type === "subheader") {
          return <H3 key={i}>{content}</H3>;
        }

        if (type === "paragraph") {
          return <P key={i}>{content}</P>;
        }
      })}
    </div>
  );
}
