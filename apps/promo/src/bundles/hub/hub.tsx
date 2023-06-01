import Base from "@/shared/layout/base";
import H1 from "@/shared/layout/base/h1";
import NavigationList, { LinkType } from "./components/navigation-list";
import Icon, { LessonIcon } from "@/shared/components/icon";

const links: LinkType[] = [
  {
    icon: (
      <Icon>
        <LessonIcon />
      </Icon>
    ),
    title: "lessons",
    href: "/lessons",
  },
];

export default function Hub() {
  return (
    <Base header={<H1>Hub</H1>} content={<NavigationList links={links} />} />
  );
}
