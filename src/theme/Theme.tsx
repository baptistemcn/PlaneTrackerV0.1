import { ReactNode } from "react";

import { ThemeProvider, createTheme } from "@rneui/themed";

import * as palette from "./palette";

interface ReThemeProviderProps {
  children: ReactNode;
}

const primary = palette.primary;

const theme = createTheme({
  darkColors: {
    background: primary.black,
    primary: primary.white,
  },
  lightColors: {
    background: primary.white,
    primary: primary.black,
    error: primary.red,
  },
});

export const ReThemeProvider = ({ children }: ReThemeProviderProps) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};
