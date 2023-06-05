describe("Hub page", () => {
  beforeEach(() => {
    cy.visit("/hub");
  });

  it("title of page", () => {
    cy.title().should("eq", "Hub | ");
  });

  it("h1 should exist", () => {
    cy.get("h1").should("have.text", "Hub");
  });

  it("meta description should exist", () => {
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Discover a world of learning opportunities on our educational platform. Explore our menu page to access a wealth of resources, including engaging lessons, innovative applications, and much more."
    );
  });

  it("navigation list should exist", () => {
    cy.get("ul[data-navigation-list]").should("exist");
  });

  it("navigation list items should exist", () => {
    cy.get("li[data-navigation-list-item]").should("exist");
  });

  it("contain link to lessons", () => {
    cy.get('a[href="/lessons"]').should("exist");

    cy.get('a[href="/lessons"]').click();
    cy.go("back");
  });
});
