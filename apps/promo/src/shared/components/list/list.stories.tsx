import List from "./list";

const Settings = {
  title: "shared/components/list",
  component: List,
};

export default Settings;

export const Default = () => (
  <div style={{ padding: "20px" }}>
    <List>
      <List.Item>point 1</List.Item>
      <List.Item>point 2</List.Item>
    </List>
  </div>
);
