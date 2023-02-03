import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import SpinnerComponent from '../Components/common/Spinner'

//routes
import { AUTH_PROTECTED_ROUTES, PUBLIC_ROUTES } from './allRoutes'
import { AuthProtected } from './authProtected'
import { FullPageRoute } from './fullPageRoute'

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        {PUBLIC_ROUTES.map((route, idx) => {
          return (
            <Route
              path={route.path}
              key={idx}
              element={
                <FullPageRoute>
                  <Suspense fallback={<SpinnerComponent />}>
                    {route.component}
                  </Suspense>
                </FullPageRoute>
              }
            />
          )
        })}

        {AUTH_PROTECTED_ROUTES.map((route, idx) => {
          const { path, component, ...rest } = route
          return (
            <Route
              path={path}
              element={
                <AuthProtected { ...rest }>
                  <Suspense fallback={<SpinnerComponent />}>
                    {component}
                  </Suspense>
                </AuthProtected>
              }
              key={idx}
              exact={true}
            />
          ) 
        })}
      </Routes>
    </React.Fragment>
  )
}

export default Index

// const AuthRoute = ({ requiredRoles, render, ...rest }) => {
//   const isAuthed = localStorage.getItem("token");
//   const role = rest.loggedUser.role; //localStorage.getItem("role");
//   const userHasRequiredRole = requiredRoles.includes(role)
//   return (
//     <Route
//       {...rest}
//       render={matchProps =>
//         isAuthed && userHasRequiredRole ? (
//           <MainLayout>{render(matchProps)}</MainLayout>
//         ) : (
//           isAuthed ?
//           <Redirect to="/dashboard" />
//           :
//           <Redirect to="/" />
//         )
//       }
//     />
//   );
// };
