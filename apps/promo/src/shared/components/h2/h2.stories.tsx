import H2 from "./h2";

const settings = {
  title: "shared/components/h2",
  component: H2,
};

export default settings;

export const Default = () => (
  <div style={{ padding: "20px" }}>
    <H2>Header</H2>
  </div>
);
