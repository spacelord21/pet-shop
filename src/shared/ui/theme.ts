const THEME_GRID_STEP = 16;

export const theme = {
  name: "theme",
  palette: {
    background: {
      primary: "#FFFAF5",
      secondary: "#f7f7f7",
    },
    text: {
      primary: "#313052",
      secondary: "#FFFFFF",
    },
    accent: {
      primary: "#313052",
      turquoise: "#3da4ab",
      yellow: "#f6cd61",
      orange: "#fe8a71",
    },
  },
  typography: {
    title: {
      size: "21px",
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
    largeTitle: {
      size: "45px",
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
    body10: {
      size: "10px",
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
    body12: {
      size: "10px",
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
    title2: {
      size: "32px",
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
