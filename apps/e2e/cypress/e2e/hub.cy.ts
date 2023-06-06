describe("Hub page", () => {
  beforeEach(() => {
    cy.visit("/hub");
  });

  it("title of page", () => {
    cy.title().should("eq", "Хаб | Afina");
  });

  it("h1 should exist", () => {
    cy.get("h1").should("have.text", "Хаб");
  });

  it("meta description should exist", () => {
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Откройте для себя мир обучения на нашей образовательной платформе. Исследуйте нашу страницу меню, чтобы получить доступ к богатству ресурсов, включая увлекательные уроки, инновационные приложения и многое другое."
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
