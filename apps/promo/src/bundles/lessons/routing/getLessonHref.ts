import type { Lesson } from "@/bundles/lessons/types";

export default function getLessonHref(lesson: Lesson): string {
  return `/lessons/${lesson.id}`;
}
