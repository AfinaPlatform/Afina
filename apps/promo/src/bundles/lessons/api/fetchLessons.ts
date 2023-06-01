import type { Lesson, LessonFromServer } from "@/bundles/lessons/types";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const backend = process.env.backend;

// TODO its mock
export default async function fetchLessons(): Promise<Lesson[]> {
  try {
    const response = await fetch(`${backend}/lessons/`, {
      cache: "no-cache",
    });

    if (response.ok) {
      const data = await response.json();
      const lessonsFromServer: LessonFromServer[] = data.lessons;
      const lessons = lessonsFromServer.map((lesson) => {
        return {
          ...lesson,
          id: lesson._id,
        };
      });
      return lessons;
    }
    return [];
  } catch (e) {
    return [];
  }
}
