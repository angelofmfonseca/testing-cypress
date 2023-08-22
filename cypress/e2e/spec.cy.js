describe("Fundamentals tests", () => {
  it("Contains the correct header text", () => {
    cy.visit("/fundamentals");
    cy.get("[data-test='fundamentals-header']").should(
      "contain.text",
      "Testing Fundamentals",
    );
  });
  it("The accordion works correctly", () => {
    cy.visit("/fundamentals");
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible",
    );
    cy.get("[data-test='accordion-item-1']").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible",
    );
    cy.get("[data-test='accordion-item-1']").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible",
    );
  });
});
