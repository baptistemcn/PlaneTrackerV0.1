import { ThemeProvider, createTheme } from "@rneui/themed";
import { ReactNode } from "react";

interface ReThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  darkColors: {},
  lightColors: {},
});

export const ReThemeProvider = ({ children }: ReThemeProviderProps) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};
