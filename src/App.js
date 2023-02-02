import React from 'react'
import Route from './Routes'
import './assets/scss/index.scss'
import lottie from 'lottie-web'
import { defineElement } from 'lord-icon-element'

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation)

function App () {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  )
}

export default App
