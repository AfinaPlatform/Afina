import lesson from "../fixtures/lesson";

const { backendUrl } = Cypress.env();

describe("Lesson page", () => {
  let lessonId;
  let data;

  beforeEach(() => {
    cy.fixture("lesson").then((lesson) => {
      cy.request("POST", `${backendUrl}/lessons/add`, lesson).then((res) => {
        lessonId = res.body.lessonId;
        data = lesson;

        cy.visit(`/lessons/${lessonId}`);
      });
    });
  });

  it("title should exist", () => {
    cy.title().should("eq", data.title);
  });

  it("meta description should exist", () => {
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      data.description
    );
  });

  it("h1 should exist", () => {
    cy.get("h1").should("have.text", data.title);
  });

  it("article should exist", () => {
    cy.get("article").should("exist");
  });

  it("back link button should exist", () => {
    cy.get("a[data-back-link").should("have.text", "Back");

    cy.get("a[data-back-link]").click();
    cy.location("pathname").should("eq", "/lessons");
    cy.go("back");
  });

  afterEach(() => {
    cy.request("POST", `${backendUrl}/lessons/remove`, {
      id: lessonId,
    });
  });
});
