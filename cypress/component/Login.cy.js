import Login from "../../src/pages/Authentication/Login"

describe('Login page testing', () => {
  it('Login.js', () => {
    cy.mount(<Login/>)
    cy.get('[data-cy-root=""] > div').then($body => {
      console.log($body[0].__reactProps$u6hflwj96b);
      if ($body.includes("Login")) {   
          //evaluates as true
      }
  });
  })
})