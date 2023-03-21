const THEME_GRID_STEP = 16;

export const theme = {
  name: "theme",
  palette: {
    background: {
      primary: "#FFFAF5",
      secondary: "#f7f7f7",
      tertiary: "#EDE9E470",
      quaternary: "#D9D9D9",
    },
    text: {
      primary: "#302F51",
      secondary: "#FFFFFF",
      tertiary: "#57557D",
    },
    accent: {
      primary: "#313052",
      secondary: "#57557D",
      turquoise: "#3da4ab",
      yellow: "#f6cd61",
      orange: "#fe8a71",
      grey: "#808080",
      lightGreen: "#83f28f",
      dark: "#232831",
      error: "#dc3545",
    },
  },
  typography: {
    title: {
      size: "21px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    largeTitle: {
      size: "45px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    body10: {
      size: "10px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    body12: {
      size: "10px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    body16: {
      size: "16px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    title2: {
      size: "32px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    body14: {
      size: "14px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    body24: {
      size: "24px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
