import Link from "@/shared/components/link";
import css from "./navigation-list.module.scss";
import { ReactNode } from "react";

export type LinkType = {
  icon: ReactNode;
  title: string;
  href: string;
};

type NavigationListProps = {
  links: LinkType[];
};

export default function NavigationList({ links }: NavigationListProps) {
  return (
    <ul data-navigation-list className={css.root}>
      {links.map(({ href, title, icon }) => (
        <li key={title} data-navigation-list-item>
          <Link href={href}>
            <div className={css.item}>
              <div className={css.iconWrapper}>
                <span>{icon}</span>
              </div>
              <span className={css.text}>{title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
