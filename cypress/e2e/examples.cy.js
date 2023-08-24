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

  it("Intercepts tests", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });

  it.only("Grudges list tests", () => {
    cy.contains(/add some grudges/i);
    cy.getDataTest("clear-button").should("not.exist");
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("some grudge");
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    cy.contains(/grudges/i);
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("another grudge");
    });
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li").its(0).should("contains.text", "some grudge");
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    cy.getDataTest("clear-button").should("exist");
    cy.getDataTest("clear-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
    cy.contains(/add some grudges/i);
    cy.getDataTest("clear-button").should("not.exist");
  });
});
