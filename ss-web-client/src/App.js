import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

import COMPANY_LOGO from "./assests/companyLogo2.png";

import { AuthContext, AuthProvider } from "./context/AuthContext/AuthContext";
import { ScamDataProvider } from "./context/ScamDataContext/ScamDataContext";
import { CustomThemeContext } from "./context/CustomThemeContext/CustomThemeContext";

import {
  App,
  Signin,
  NotFound,
  Management,
  Reviews,
  ReviewContent,
  Reports,
} from "./containers";

export default function AppRoutes() {
  const { customTheme } = useContext(CustomThemeContext);

  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/main">
              <Route
                path="/main/reviews"
                element={<PrivateRoute component={<Reviews />} />}
              />
              <Route
                path="/main/review-content/:contentTypeId"
                element={<PrivateRoute component={<ReviewContent />} />}
              />
              <Route
                path="/main/management"
                element={<PrivateRoute component={<Management />} />}
              />
              <Route
                path="/main/reports"
                element={<PrivateRoute component={<Reports />} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

const PrivateRoute = ({ component }) => {
  const { user, initializing } = useContext(AuthContext);

  if (initializing) {
    return (
      <div style={{ width: "100%" }}>
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
          <a href="https://www.flaticon.com/free-icons/scam" title="scam icons">
            <img width={150} alt="companyLogo" id="logo" src={COMPANY_LOGO} />
          </a>
        </div>
      </div>
    );
  }

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <ScamDataProvider>
      <App>{component}</App>
    </ScamDataProvider>
  );
};
