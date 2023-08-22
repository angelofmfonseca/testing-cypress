describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("subscribe", () => {
    cy.getDataTest("forms-header").should("contain.text", "Testing Forms");
  });
});
