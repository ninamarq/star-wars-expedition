describe("Planets table on pages", () => {
  it("renders on /planets", () => {
    cy.visit("http://localhost:3000/planets");
    cy.get("table").should("exist");
    cy.get("table").find("thead th").should("have.length", 5);

    cy.get("table")
      .find("thead th")
      .should("contain", "Name")
      .and("contain", "Climate")
      .and("contain", "Diameter")
      .and("contain", "Population")
      .and("contain", "Favorite");
  });

  it("renders on /planets/[planetId]", () => {
    const planetId = 2;
    cy.visit(`http://localhost:3000/planets/${planetId}`);
    cy.get("table").should("exist");
    cy.get("table").find("thead th").should("have.length", 5);

    cy.get("table")
      .find("thead th")
      .should("contain", "Name")
      .and("contain", "Climate")
      .and("contain", "Diameter")
      .and("contain", "Population")
      .and("contain", "Favorite");
  });

  it("sorts table by Population", () => {
    cy.visit("http://localhost:3000/planets");
    cy.get("table").contains("th", "Population").click();
    cy.get("table tbody tr").then((tableRows) => {
      const populations = tableRows
        .map((_index, row) => Cypress.$(row).find("td:nth-child(4)").text())
        .get();
      const sortedPopulations = [...populations].sort(
        (a, b) => Number(a) - Number(b)
      );
      expect(populations).to.deep.equal(sortedPopulations);
    });
  });

  it("sorts table by Diameter", () => {
    cy.visit("http://localhost:3000/planets");
    cy.get("table").contains("th", "Diameter").click();
    cy.get("table tbody tr").then((tableRows) => {
      const diameters = tableRows
        .map((_index, row) => Cypress.$(row).find("td:nth-child(3)").text())
        .get();
      const sortedDiameters = [...diameters].sort(
        (a, b) => Number(a) - Number(b)
      );
      expect(diameters).to.deep.equal(sortedDiameters);
    });
  });
});
