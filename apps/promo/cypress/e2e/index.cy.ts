describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("title of page", () => {
    cy.title().should("eq", "Afina-platform");
  });

  it("h1 should exist", () => {
    cy.get("h1").should("have.text", "Afina");
  });

  it("meta description should exist", () => {
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Afina-Platform, the modern technology online platform where you can learn anything. Explore a vast array of courses, resources, and interactive tools to expand your knowledge and skills."
    );
  });

  it("welcome text should exist", () => {
    cy.get("p[data-welcome-text").should(
      "have.text",
      "Welcome to our online learning platform!"
    );
  });

  it("short description should exist", () => {
    cy.get("p[data-info-text").should(
      "have.text",
      "We believe that learning should be an engaging and enjoyable experience, which is why we've designed our platform to be as fun and interesting as watching a movie. With our engaging multimedia content, interactive quizzes, and gamified learning experiences, you'll find that the learning process is easier and more enjoyable than ever before :)"
    );
  });

  it("button stub should exist", () => {
    cy.get("p[data-button-stub]").should("have.text", "Soon...");
  });
});
