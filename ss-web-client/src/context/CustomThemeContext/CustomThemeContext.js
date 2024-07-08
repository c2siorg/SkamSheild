import React, { useEffect, useState } from "react";
import cyan from "@mui/material/colors/cyan";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const CustomThemeContext = React.createContext({});

export const CustomThemeProvider = ({ children }) => {
  const customLightThemeObject = {
    palette: {
      mode: "light",
      // primary: {
      //   main: blue[500],
      // },
    },
  };
  const customDarkThemeObject = {
    palette: {
      mode: "dark",
      primary: {
        main: cyan[500],
      },
    },
  };

  const [activeTheme, setActiveTheme] = useState(0);
  const [customTheme, setCustomTheme] = useState(
    createTheme(customLightThemeObject)
  );

  useEffect(() => {
    const localActiveTheme = parseInt(localStorage.getItem("active_theme"));
    if (localActiveTheme) {
      setActiveTheme(localActiveTheme);
      setCustomTheme(
        createTheme(
          localActiveTheme === 1
            ? customDarkThemeObject
            : customLightThemeObject
        )
      );
    }
  }, []);

  const toggleTheme = () => {
    if (activeTheme === 0) {
      setCustomTheme(createTheme(customDarkThemeObject));
      setActiveTheme(1);
      localStorage.setItem("active_theme", 1);
    } else {
      setCustomTheme(createTheme(customLightThemeObject));
      setActiveTheme(0);
      localStorage.setItem("active_theme", 0);
    }
  };

  return (
    <CustomThemeContext.Provider
      value={{
        customTheme,
        activeTheme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
