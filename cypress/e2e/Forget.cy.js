describe('Forget page testing', () => {
    it('Input field is empty', () => {
      cy.visit('forget-password')
      cy.get('input[placeholder*="Enter email"]')
  
      cy.get('.login-btn').click()
  
      cy.get(':nth-child(1) > .invalid-feedback').contains('Please Enter Your Email')
    })
    
    it('Forget password page', () => {
      cy.visit('forget-password')
      cy.get('input[placeholder*="Enter email"]').type('test@gmail.com')
      cy.contains('Reset').click()
  
      cy.on('window:alert', t => {
        expect(t).to.contains('Link has been successfully send on your email!')
      })
    })
  
  })