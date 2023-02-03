describe('Register page testing', () => {
    it('Input field is empty', () => {
        cy.visit('register')
        cy.get('input[placeholder*="Enter email"]')
        cy.get('input[placeholder*="Enter username"]')
        cy.get('input[placeholder*="Enter Password"]')

        cy.get('.login-btn').click()

        cy.get(':nth-child(1) > .invalid-feedback').contains('Please Enter Your Email')
        cy.get(':nth-child(2) > .invalid-feedback').contains('Please Enter Your Username')
        cy.get(':nth-child(3) > .invalid-feedback').contains('Please Enter Your Password')
    })

    it('Register page', () => {
        cy.visit('register')
        cy.get('input[placeholder*="Enter email"]').type('test@gmail.com')
        cy.get('input[placeholder*="Enter username"]').type('Test Name')
        cy.get('input[placeholder*="Enter Password"]').type('test@1234')

        cy.get('.login-btn').click()

        cy.on('window:alert', t => {
        expect(t).to.contains('Registration Successfully!')
        })
    })
})
