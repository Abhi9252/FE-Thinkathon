import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const LazyLogin = lazy(() => import('../pages/Authentication/Login'))
const LazyCart = lazy(() => import('../pages/Cart'))
const LazyHome = lazy(() => import('../pages/Home'))
const LazyRegister = lazy(() => import('../pages/Authentication/Register'))
const LazyForgetPw = lazy(() => import('../pages/Authentication/ForgetPassword'))
const LazyResetPassword = lazy(() => import('../pages/Authentication/ResetPassword'))

const AUTH_PROTECTED_ROUTES = [
  { path: '/cart', component: <LazyCart />, roles: [1] },
  { path: '/home', component: <LazyHome /> },
  { path: '/', component: <Navigate to='/home' /> },
  { path: '*', component: <Navigate to='/home' /> }
]

const PUBLIC_ROUTES = [
  { path: '/login', component: <LazyLogin /> },
  { path: '/register', component: <LazyRegister /> },
  { path: '/forget-password', component: <LazyForgetPw /> },
  { path: '/reset-password', component: <LazyResetPassword /> },
  { path: '/', component: <Navigate to='/home' /> }
]

export { AUTH_PROTECTED_ROUTES, PUBLIC_ROUTES }
