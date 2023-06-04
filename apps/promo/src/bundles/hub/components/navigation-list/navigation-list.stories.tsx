import Icon, { LessonIcon } from "@/shared/components/icon";
import NavigationList from "./navigation-list";

const settings = {
  title: "bundles/hub/components/navigation-lsit",
  component: NavigationList,
};

export default settings;

export const Default = () => (
  <div style={{ padding: "20px" }}>
    <NavigationList
      links={[
        {
          href: "/lessons",
          icon: (
            <Icon>
              <LessonIcon />
            </Icon>
          ),
          title: "Lessons",
        },
      ]}
    />
  </div>
);
