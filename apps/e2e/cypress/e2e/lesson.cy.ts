import lesson from "../fixtures/lesson";

// TODO add test for end button

const { backendUrl } = Cypress.env();

describe("Lesson page", () => {
  let id;
  let data;

  before(() => {
    cy.fixture("lesson").then((lesson) => {
      cy.request("POST", `${backendUrl}/lessons/add`, lesson).then(
        (response) => {
          const { lessonId } = response.body;
          data = lesson;
          id = lessonId;
        }
      );
    });
  });

  beforeEach(() => {
    cy.visit(`/lessons/${id}`);
  });

  it("title", () => {
    cy.title().should("eq", data.title);
  });

  it("meta description", () => {
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      data.description
    );
  });

  it("h1", () => {
    cy.get("h1").should("have.text", data.title);
  });

  it("back link button should exist", () => {
    cy.get("a[data-back-link").should("have.text", "Назад");
    cy.get("a[data-back-link]").click();
    cy.location("pathname").should("eq", "/lessons");
    cy.go("back");
  });

  describe("content", () => {
    it("header", () => {
      const header = data.content.find((chunk) => chunk.type === "header");

      cy.get("div[data-article-body] h2").should("have.text", header.content);
    });

    it("subheader", () => {
      const subheader = data.content.find(
        (chunk) => chunk.type === "subheader"
      );

      cy.get("div[data-article-body] h3").should(
        "have.text",
        subheader.content
      );
    });

    it("paragraph", () => {
      const paragraph = data.content.find(
        (chunk) => chunk.type === "paragraph"
      );

      cy.get("div[data-article-body] p").should("have.text", paragraph.content);
    });

    it("list", () => {
      const list = data.content.find((chunk) => chunk.type === "list");

      list.content.map((item) => {
        cy.contains(item).should("exist");
      });
    });
  });

  after(() => {
    cy.request("POST", `${backendUrl}/lessons/remove`, {
      id,
    });
  });
});
