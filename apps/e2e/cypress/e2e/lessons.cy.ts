import lesson from "../fixtures/lesson.json";

const { backendUrl } = Cypress.env();

describe("Lessons page", () => {
  beforeEach(() => {
    cy.visit("/lessons");
  });

  it("title of page", () => {
    cy.title().should("eq", "Уроки | Afina");
  });

  it("meta description should exist", () => {
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Откройте для себя всеобъемлющие и увлекательные уроки на Afina - ведущей образовательной платформе. Исследуйте нашу обширную библиотеку мастерски созданных уроков по различным предметам и дисциплинам."
    );
  });

  it("h1 should exist", () => {
    cy.get("h1").should("have.text", "Уроки");
  });

  it("should exist message if there are no lessons", () => {
    cy.get("p[data-no-lessons-message]").should(
      "have.text",
      "Пока нет уроков."
    );
  });

  it("should exist list of available lessons", async () => {
    cy.fixture("lesson").then((lesson) => {
      cy.request("POST", `${backendUrl}/lessons/add`, lesson).then((res) => {
        const lessonId = res.body.lessonId;

        cy.visit("/lessons");
        cy.get("ul[data-lessons-list]").should("exist");
        cy.get("li[data-lesson-item] a")
          .should("have.text", lesson.title)
          .click()
          .then(() => {
            cy.location().should((loc) => {
              expect(loc.pathname).to.eq(`/lessons/${lessonId}`);
            });
            cy.request("POST", `${backendUrl}/lessons/remove`, {
              id: lessonId,
            });
          });
      });
    });
  });
});
