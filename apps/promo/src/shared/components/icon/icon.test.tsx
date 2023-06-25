import { render } from "@testing-library/react";
import Icon from "./icon";

describe("shared/icon", () => {
  it("render div html tag", () => {
    const { container } = render(<Icon>Here icon</Icon>);
    expect(container.querySelector("div")?.tagName).toBe("DIV");
  });

  it("snapshot", () => {
    const { asFragment } = render(<Icon>icon</Icon>);
    expect(asFragment()).toMatchSnapshot();
  });
});
