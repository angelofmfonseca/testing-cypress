describe("Fundamentals tests", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("Contains the correct header text", () => {
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals",
    );
  });
  it("The accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible",
    );
    cy.getDataTest("accordion-item-1").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible",
    );
    cy.getDataTest("accordion-item-1").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible",
    );
  });
});
