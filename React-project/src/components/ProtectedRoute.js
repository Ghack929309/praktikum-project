import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route {...props} exact>
      {
        () => props.loggedIn ? <Component /> : <Redirect to={{pathname:'/signin',state:{from : props.location}}}/>
      }
    </Route>
)}

export default ProtectedRoute;