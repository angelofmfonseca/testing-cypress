describe("Examples tests", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("Multipage navigation tests", () => {
    cy.getDataTest("nav-bar-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-bar-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-bar-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav-bar-forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("nav-bar-component").click();
    cy.location("pathname").should("equal", "/component");

    cy.getDataTest("nav-bar-best-practices").click();
    cy.location("pathname").should("equal", "/best-practices");
  });

  it.only("Intercepts tests", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });
});
