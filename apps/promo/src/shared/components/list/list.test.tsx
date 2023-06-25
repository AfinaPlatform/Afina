import List from "./list";
import { render } from "@testing-library/react";

describe("shared/list", () => {
  it("render ul", () => {
    const { container } = render(
      <List>
        <List.Item>item1</List.Item>
      </List>
    );

    expect(container.querySelector("ul")?.tagName).toBe("UL");
  });

  it("snapshot", () => {
    const { asFragment } = render(
      <List>
        <List.Item>item1</List.Item>
      </List>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
