describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Contains the correct header text", () => {
    cy.getDataTest("forms-header").should("contain.text", "Testing Forms");
  });

  it("Subscribe works correctly", () => {
    cy.getDataTest("email-input")
      .find("input")
      .should("have.attr", "type", "email")
      .type("hello@cypress.com");
    cy.contains(/Successfully subbed: hello@cypress.com/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: hello@cypress.com/i).should("exist");
  });
});
