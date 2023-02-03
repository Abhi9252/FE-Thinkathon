import { Navigate } from 'react-router-dom'
import React from 'react'

const FullPageRoute = props => {
  const token = localStorage.getItem('token')
  if (token) {
    return <Navigate to={{ pathname: '/home' }} />
  }

  return <>{props.children}</>
}

export { FullPageRoute }
