import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({
  component: Component,
  isProtected,
  redirectUrl,
  subRoutes,
  ...restProps
}) {
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  return (
    <Route
      {...restProps}
      render={(props) =>
        isProtected && !isAuthenticated ? (
          <Redirect to={redirectUrl} />
        ) : (
          <Component {...props} subRoutes={subRoutes} />
        )
      }
    />
  )
}

export default ProtectedRoute
