describe('template spec', () => {
  it('routing clients', () => {
    cy.visit('/')
    cy.get('#tab-button-tab1').click()
    cy.get('app-tab1 ion-button').click()
    cy.get('ion-back-button').click()
  })

  it('routing reservations', () => {
    cy.visit('/tabs/tab1')
    cy.get('#tab-button-tab2').click()
    cy.get('app-tab2 ion-button').click()
    cy.get('ion-back-button').click()
  })

  it('routing products', () => {
    cy.visit('/')
    cy.get('#tab-button-tab3').click()
    cy.get('app-tab3 ion-button').click()
    cy.get('ion-back-button').click()
  })

})