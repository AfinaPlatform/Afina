import H2 from "./h2";
import { render, screen } from "@testing-library/react";

describe("shared/h2", () => {
  it("render h2 html tag", () => {
    const { container } = render(<H2>Hello</H2>);
    expect(container.querySelector("h2")?.tagName).toBe("H2");
  });
  it("snapshot", () => {
    const { asFragment } = render(<H2>Hello</H2>);
    expect(asFragment()).toMatchSnapshot();
  });
});
