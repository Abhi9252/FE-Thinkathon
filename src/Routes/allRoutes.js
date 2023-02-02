import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const LazyLogin = lazy(() => import('../pages/Authentication/Login'))
const LazyCart = lazy(() => import('../pages/Cart'))
const LazyHome = lazy(() => import('../pages/Home'))

const AUTH_PROTECTED_ROUTES = [
  { path: '/cart', component: <LazyCart /> },
  { path: '/home', component: <LazyHome /> },
  { path: '/', component: <Navigate to='/home' /> },
  { path: '*', component: <Navigate to='/home' /> }
]

const PUBLIC_ROUTES = [
  { path: '/login', component: <LazyLogin /> },
  { path: '/', component: <Navigate to='/login' /> }
]

export { AUTH_PROTECTED_ROUTES, PUBLIC_ROUTES }
