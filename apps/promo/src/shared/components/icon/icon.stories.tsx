import Icon from "./icon";
import Menu from "./menu";
import Lesson from "./lesson";

const settings = {
  title: "shared/components/icon",
  component: Icon,
};

export default settings;

export const MenuIcon = () => (
  <div style={{ padding: "20px" }}>
    <Icon>
      <Menu />
    </Icon>
  </div>
);

export const LessonIcon = () => (
  <div style={{ padding: "20px" }}>
    <Icon>
      <Lesson />
    </Icon>
  </div>
);
