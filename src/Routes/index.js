import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

//Layouts
import VerticalLayout from '../Layouts/index'

//routes
import { AUTH_PROTECTED_ROUTES, PUBLIC_ROUTES } from './allRoutes'
import { AuthProtected } from './authProtected'

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        {PUBLIC_ROUTES.map((route, idx) => (
          <Route
            path={route.path}
            element={route.component}
            key={idx}
            exact={true}
          />
        ))}

        {AUTH_PROTECTED_ROUTES.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <AuthProtected>
                <VerticalLayout>
                  <Suspense>{route.component}</Suspense>
                </VerticalLayout>
              </AuthProtected>
            }
            key={idx}
            exact={true}
          />
        ))}
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
