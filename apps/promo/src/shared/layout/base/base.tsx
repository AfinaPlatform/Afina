import { ReactNode } from "react";
import css from "./base.module.scss";
import HubLink from "@/shared/layout/base/hub-link";

type BaseLayoutProps = {
  header: ReactNode;
  content: ReactNode;
};

export default function BaseLayout({ content, header }: BaseLayoutProps) {
  return (
    <div className={css.root}>
      <div className={css.headerWrapper}>
        <header className={css.header}>{header}</header>
        <nav className={css.nav}>
          <HubLink />
        </nav>
      </div>
      <main>{content}</main>
    </div>
  );
}
