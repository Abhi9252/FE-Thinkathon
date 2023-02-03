import { Navigate } from 'react-router-dom'
import React from 'react'
import Header from '../Layouts/Header'
import Sidebar from '../Layouts/Sidebar'
import Footer from '../Layouts/Footer'

const AuthProtected = ({...rest}) => {
  // console.log('Roles : ', roles);
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to={{ pathname: '/login' }} />
  }

  return (
    <div id='layout-wrapper'>
      <Header />
      <Sidebar />
      <div className='main-content'>
        {rest.children}
        <Footer />
      </div>
    </div>
  )
}

export { AuthProtected }
