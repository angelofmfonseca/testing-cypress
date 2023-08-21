describe("template spec", () => {
  it("visits the homepage", () => {
    cy.visit("http://localhost:3000/fundamentals");
    cy.get("[data-test='fundamentals-header']").should(
      "contain.text",
      "Testing Fundamentals",
    );
  });
});
