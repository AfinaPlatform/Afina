describe("General for pages", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("favicon", () => {
    cy.get('link[href="/favicon.ico"]').should("exist");
    cy.request("/favicon.ico").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
