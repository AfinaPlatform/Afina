import Link from "./link";
import { render } from "@testing-library/react";

describe("shared/link", () => {
  it("render a html tag", () => {
    const { container } = render(<Link href="/">Click</Link>);
    expect(container.querySelector("a")?.tagName).toBe("A");
  });

  it("snapshot", () => {
    const { asFragment } = render(<Link href="/">Click</Link>);
    expect(asFragment()).toMatchSnapshot();
  });
});
