import Link from "@/shared/components/link";
import type { Lesson } from "@/bundles/lessons/types";
import getLessonHref from "@/bundles/lessons/routing/getLessonHref";

type LessonsListProps = {
  links: Lesson[];
};

export default function LessonsList({ links }: LessonsListProps) {
  return (
    <ul data-lessons-list>
      {links.map((lesson) => {
        const { id, title } = lesson;

        return (
          <li data-lesson-item key={id}>
            <Link href={getLessonHref(lesson)}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
