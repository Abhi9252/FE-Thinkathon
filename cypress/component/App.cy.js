import App from "../../src/App"
import { BrowserRouter as Router } from 'react-router-dom';

describe('Run app.js file.', () => {
  it('playground', () => {
    cy.mount(<Router><App/></Router>)
  })
})