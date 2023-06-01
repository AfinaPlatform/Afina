import ArticleBody from "@/bundles/lessons/components/article-body";
import ArticleContainer from "@/bundles/lessons/components/article-container";
import ArticleHead from "@/bundles/lessons/components/article-head";
import type { Lesson as LessonType } from "@/bundles/lessons/types";
import fetchLessonById from "@/bundles/lessons/api/fetchLessonById";
import { notFound } from "next/navigation";

type LessonProps = Pick<LessonType, "title" | "content">;

export function Lesson({ title, content }: LessonProps) {
  return (
    <ArticleContainer>
      <ArticleHead title={title} />
      <ArticleBody content={content} />
    </ArticleContainer>
  );
}

type LessonPageProps = {
  params: {
    id: string;
  };
};

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = params;
  const lesson = await fetchLessonById(id);

  if (lesson) {
    const { content, title } = lesson;

    return <Lesson title={title} content={content} />;
  }

  notFound();
}
