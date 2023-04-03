describe('routing', () => {
  it('routing clients', () => {
    cy.visit('/')
    cy.get('#tab-button-tab1').click()
    cy.get('app-tab1.ion-page #container > strong').should('have.text', 'Clients')
    cy.get('app-tab1.ion-page #container > ion-button').should('have.text', 'Go to new page')
    cy.get('app-tab1 ion-button').click()
    cy.get('ion-list ion-button').first().click()
    cy.get('app-edit-client-page ion-back-button').click()
    cy.get('app-clients-page ion-back-button').click()
  })

  it('routing reservations', () => {
    cy.visit('/tabs/tab1')
    cy.get('#tab-button-tab2').click()
    cy.get('app-tab2.ion-page #container > strong').should('have.text', 'Reservations')
    cy.get('app-tab2.ion-page #container > ion-button').should('have.text', 'Go to new page')
    cy.get('app-tab2 ion-button').click()
    cy.get('ion-back-button').click()
  })

  it('routing products', () => {
    cy.visit('/')
    cy.get('#tab-button-tab3').click()
    cy.get('app-tab3.ion-page #container > strong').should('have.text', 'Products')
    cy.get('app-tab3.ion-page #container > ion-button').should('have.text', 'Go to new page')
    cy.get('app-tab3 ion-button').click()
    cy.get('ion-back-button').click()
  })

})