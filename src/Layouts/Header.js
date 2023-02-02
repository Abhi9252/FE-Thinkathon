import React from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import ProfileDropdown from '../Components/common/ProfileDropdown'

const Header = () => {
  const toogleMenuBtn = () => {
    document.querySelector('.navbar-menu')?.classList?.add('show-narbar-menu')
    document.querySelector('.page-content')?.classList?.add('add-opacity')
    document.querySelector('.page-topbar')?.classList?.add('add-opacity')
    document.querySelector('.logo')?.classList?.add('d-inline')
  }
  return (
    <React.Fragment>
      <header id='page-topbar' className='p-3'>
        <div className='navbar-header h-100 d-flex'>
          <div>
            <FiAlignLeft
              className='fs-16 hamburger-icon'
              onClick={toogleMenuBtn}
            />
          </div>
          <ProfileDropdown />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
