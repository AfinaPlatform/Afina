describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("title of page", () => {
    cy.title().should("eq", "Afina");
  });

  it("h1 should exist", () => {
    cy.get("h1").should("have.text", "Afina");
  });

  it("meta description should exist", () => {
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Afina - современная онлайн-платформа, где вы можете изучить что угодно. Исследуйте широкий спектр курсов, ресурсов и интерактивных инструментов, чтобы расширить свои знания и навыки."
    );
  });

  it("welcome text should exist", () => {
    cy.get("p[data-welcome-text").should(
      "have.text",
      "Добро пожаловать на нашу онлайн-платформу!"
    );
  });

  it("short description should exist", () => {
    cy.get("p[data-info-text").should(
      "have.text",
      "Мы считаем, что обучение должно быть интересным и увлекательным процессом, поэтому мы разработали нашу платформу таким образом, чтобы она была так же увлекательна и интересна, как просмотр фильма. 😌"
    );
  });

  it("link to hub should exist", () => {
    cy.get("a[data-start-link]")
      .should("have.text", "Начать")
      .should("have.attr", "href", "/hub");

    cy.get("a[data-start-link]").click();
    cy.location("pathname").should("eq", "/hub");
    cy.go("back");
  });
});
