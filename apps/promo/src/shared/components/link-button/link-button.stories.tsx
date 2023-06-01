import LinkButton from "./link-button";

const settings = {
  title: "shared/components/link-button",
  component: LinkButton,
};

export default settings;

export const Default = () => (
  <div style={{ padding: "20px" }}>
    <LinkButton href="/">Link 1</LinkButton>
  </div>
);
