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

  // it("google-tag-manager", () => {
  //   cy.get(
  //     'script[src="https://www.googletagmanager.com/gtag/js?id=GTM-KRLWHB3"]'
  //   ).should("exist");

  //   cy.get("body noscript").should(
  //     "have.text",
  //     '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KRLWHB3" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
  //   );

  //   cy.get("script[data-google-tag-manager-datalayer-init]").should("exist");
  // });
});
