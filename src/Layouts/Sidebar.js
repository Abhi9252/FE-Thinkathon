import React from 'react'
import SimpleBar from 'simplebar-react'

import { Container } from 'react-bootstrap'

//ICON
import { FiArrowLeft } from 'react-icons/fi'

//COMPONENTS
import VarticalLayout from './VerticalLayout'

const Sidebar = () => {
  const toogleMenuBtn = () => {
    document
      .querySelector('.navbar-menu')
      ?.classList?.remove('show-narbar-menu')
    // document.querySelector('.navbar-menu')?.classList?.add('navbar-trasition')
    document.querySelector('.page-content')?.classList?.remove('add-opacity')
    document.querySelector('.page-topbar')?.classList?.remove('add-opacity')
    document.querySelector('.logo')?.classList?.remove('d-inline')
  }

  return (
    <React.Fragment>
      <div className='app-menu navbar-menu navbar-trasition'>
        <div className='navbar-brand-box'>
          <p className='logo'>DEMO</p>
          <p className='scroll-icon'>
            <FiArrowLeft onClick={toogleMenuBtn} />
          </p>
        </div>
        <SimpleBar id='scrollbar' className='h-100'>
          <Container fluid className='p-0'>
            <ul className='navbar-nav' id='navbar-nav'>
              <VarticalLayout />
            </ul>
          </Container>
        </SimpleBar>
      </div>
    </React.Fragment>
  )
}

export default Sidebar
