describe("Dashboard", () => {
  it("affiche la page dashboard", () => {
    cy.visit("http://localhost:5173")

    cy.contains("Solde total").should("exist")
  })
})