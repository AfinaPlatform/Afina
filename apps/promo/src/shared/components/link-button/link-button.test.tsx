import LinkButton from "./link-button";
import { render } from "@testing-library/react";

describe("shared/link-button", () => {
  it("render a html tag", () => {
    const { container } = render(<LinkButton href="/">Click</LinkButton>);
    expect(container.querySelector("a")?.tagName).toBe("A");
  });

  it("snapshot", () => {
    const { asFragment } = render(<LinkButton href="/">Click</LinkButton>);
    expect(asFragment()).toMatchSnapshot();
  });
});
