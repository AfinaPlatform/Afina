import type { Lesson, LessonFromServer } from "@/bundles/lessons/types";
import { notFound } from "next/navigation";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const backend = process.env.backend;

export default async function fetchLessonById(
  id: Lesson["id"]
): Promise<Lesson | null> {
  try {
    const response = await fetch(`${backend}/lessons/${id}`);
    if (response.ok) {
      const data = await response.json();
      const lessonFromServer: LessonFromServer = data.lesson;
      const lesson = {
        ...lessonFromServer,
        id: lessonFromServer._id,
      };

      return lesson;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}
