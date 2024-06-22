import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Signin } from "./containers";

export default function Routes() {

  return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
    const { user, initializing } = useContext(AuthContext);
  
    if (initializing) {
      return (
        <div
          style={{
            width: "100%",
          }}
        >
          <LinearProgress />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "99vh",
            }}
          >
            {/* Loading... */}
            <img alt="companyLogo" id="logo" src={COMPANY_LOGO} />
          </div>
        </div>
      );
    }
  
    return (
      <>
        <Route
          {...rest}
          render={({ location }) =>
            user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location },
                }}
              />
            )
          }
        />
      </>
    );
  };