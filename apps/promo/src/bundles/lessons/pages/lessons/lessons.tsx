import H1 from "@/shared/layout/base/h1";
import LessonsList from "@/bundles/lessons/components/lessons-list";
import NoLessons from "@/bundles/lessons/components/no-lessons";
import BaseLayout from "@/shared/layout/base";
import type { Lesson } from "@/bundles/lessons/types";
import fetchLessons from "@/bundles/lessons/api/fetchLessons";

export default async function Lessons() {
  const lessons: Lesson[] = await fetchLessons();

  return (
    <BaseLayout
      header={<H1>Уроки</H1>}
      content={
        <>
          {lessons.length === 0 && <NoLessons />}
          {lessons.length > 0 && <LessonsList links={lessons} />}
        </>
      }
    ></BaseLayout>
  );
}
