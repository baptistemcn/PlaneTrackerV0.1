import { ReactNode } from "react";

import { ThemeProvider, createTheme } from "@rneui/themed";

import * as palette from "./palette";

interface ReThemeProviderProps {
  children: ReactNode;
}

const primary = palette.primary;
const whiteTheme = palette.whiteTheme;

const theme = createTheme({
  darkColors: {
    background: primary.black,
    primary: primary.white,
  },
  lightColors: {
    background: whiteTheme.background,
    primary: whiteTheme.primary,
    secondary: whiteTheme.secondary,
    success: whiteTheme.success,
    error: primary.red,
    grey0: whiteTheme.grey0,
    grey1: whiteTheme.grey1,
    grey2: whiteTheme.grey2,
    grey3: whiteTheme.grey3,
    grey4: whiteTheme.grey4,
    grey5: whiteTheme.grey5,
    searchBg: whiteTheme.searchBg,
  },
});

export const ReThemeProvider = ({ children }: ReThemeProviderProps) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};
