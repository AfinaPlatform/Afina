import HubLink from "./hub-link";

const settings = {
  title: "shared/layout/base/hub-link",
  component: HubLink,
};

export default settings;

export const Default = () => (
  <div style={{ padding: "20px" }}>
    <HubLink />
  </div>
);
