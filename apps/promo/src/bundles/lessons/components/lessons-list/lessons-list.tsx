import Link from "@/shared/components/link";
import type { Lesson } from "@/bundles/lessons/types";
import getLessonHref from "@/bundles/lessons/routing/getLessonHref";
import css from "./lesson-list.module.scss";

type LessonsListProps = {
  links: Lesson[];
};

export default function LessonsList({ links }: LessonsListProps) {
  return (
    <ul data-lessons-list className={css.root}>
      {links.map((lesson) => {
        const { id, title } = lesson;

        return (
          <Link href={getLessonHref(lesson)} key={id}>
            <li data-lesson-item className={css.item}>
              {title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
