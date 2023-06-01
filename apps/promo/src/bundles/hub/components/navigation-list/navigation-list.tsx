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
    <ul data-navigation-list>
      {links.map(({ href, title, icon }) => (
        <li key={title} data-navigation-list-item>
          <Link href={href}>
            <span className={css.item}>
              <span>{icon}</span>
              <span>{title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
