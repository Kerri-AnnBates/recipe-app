import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

   return (
      <Route
         {...rest}
         render={
            props => {

               return (localStorage.getItem("token")) ? (
                  <Component {...props} />
               ) : (
                     <Redirect to="/login" />
                  )
            }
         }
      />
   );
}

const mapStateToProps = (state) => {
   return {
      authToken: state.authToken,
      loggedIn: state.loggedIn
   }
}

export default connect(mapStateToProps, {})(PrivateRoute);
// export default PrivateRoute;