import H3 from "./h3";
import { render } from "@testing-library/react";

describe("shared/h3", () => {
  it("render h3 html tag", () => {
    const { container } = render(<H3>Hello</H3>);
    expect(container.querySelector("h3")?.tagName).toBe("H3");
  });

  it("snapshot", () => {
    const { asFragment } = render(<H3>Hello</H3>);
    expect(asFragment()).toMatchSnapshot();
  });
});
