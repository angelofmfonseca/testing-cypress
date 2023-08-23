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
      .as("subscribe-input");
    cy.get("@subscribe-input").type("hello@cypress.com");
    cy.contains(/Successfully subbed: hello@cypress.com/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: hello@cypress.com/i).should("exist");

    cy.wait(3000);

    cy.contains(/Successfully subbed: hello@cypress.com/i).should("not.exist");
    cy.contains(/Invalid email: hello@cypress.io!/i).should("not.exist");
    cy.get("@subscribe-input").type("hello@cypress.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: hello@cypress.io!/i).should("exist");

    cy.wait(3000);

    cy.contains(/Invalid email: hello@cypress.io!/i).should("not.exist");
    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
