import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";

import theme from "theme";

/**
 * Colocar todos los providers, se puede mockear redux y las funciones
 */
const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement) => render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
