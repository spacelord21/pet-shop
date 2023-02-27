import { ReactNode } from "react";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

type Props = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
