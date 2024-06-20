import { Signin } from "./containers";

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