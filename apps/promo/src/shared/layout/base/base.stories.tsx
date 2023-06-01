import BaseLayout from "./base";

const settings = {
  title: "shared/layout/base",
  component: BaseLayout,
};

export default settings;

export const Default = () => (
  <BaseLayout header={<h1>Here header</h1>} content={<p>Here content</p>} />
);
