import P from "./p";
import { render } from "@testing-library/react";

describe("shared/p", () => {
  it("render p html tag", () => {
    const { container } = render(
      <P>Occaecat ullamco elit veniam commodo officia.</P>
    );
    expect(container.querySelector("p")?.tagName).toBe("P");
  });

  it("snapshot", () => {
    const { asFragment } = render(
      <P>
        Amet duis ea sint anim labore aliqua exercitation laboris officia elit
        Lorem cupidatat ad culpa.
      </P>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
