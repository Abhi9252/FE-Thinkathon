describe('Auth pages testing', () => {
  it('Input field is empty', () => {
    cy.visit('login')
    cy.get('input[placeholder*="Enter email"]')
    cy.get('input[placeholder*="Enter Password"]')

    cy.get('.login-btn').click()

    cy.get(':nth-child(1) > .invalid-feedback').contains('Please Enter Your Email')
    cy.get(':nth-child(2) > .invalid-feedback').contains('Please Enter Your Password')
  })
  
  it('Login page', () => {
    cy.visit('login')
    cy.get('input[placeholder*="Enter email"]').type('test@gmail.com')
    cy.get('input[placeholder*="Enter Password"]').type('test@1234')
    cy.contains('Log In').click()

    cy.on('window:alert', t => {
      expect(t).to.contains('Login successfully')
    })
  })

})
