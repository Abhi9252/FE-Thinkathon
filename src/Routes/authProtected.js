import { Navigate, Route } from 'react-router-dom'
import React from 'react'

const AuthProtected = props => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to={{ pathname: '/login' }} />
  }
  return <>{props.children}</>
}

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <>
            {' '}
            <Component {...props} />{' '}
          </>
        )
      }}
    />
  )
}

export { AuthProtected, AccessRoute }
