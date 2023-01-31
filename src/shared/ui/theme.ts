const THEME_GRID_STEP = 16;

export const theme = {
  name: "theme",
  palette: {
    background: {
      primary: "#ffffff",
      secondary: "#f7f7f7",
    },
    text: {
      primary: "#4a4e4d",
      secondary: "#FFFFFF",
    },
    accent: {
      blue: "#0e9aa7",
      turquoise: "#3da4ab",
      yellow: "#f6cd61",
      orange: "#fe8a71",
    },
  },
  typography: {
    title: {
      size: "19.2px",
      fontFamily: "OPEN_SANS_SEMIBOLD",
      letterSpacing: "1px",
    },
    largeTitle: {
      size: "30px",
      fontFamily: "OPEN_SANS_BOLD",
      letterSpacing: "1px",
    },
    body10: {
      size: "10px",
      fontFamily: "OPEN_SANS_REGULAR",
      letterSpacing: "1px",
    },
    body12: {
      size: "10px",
      fontFamily: "OPEN_SANS_MEDIUM",
      letterSpacing: "1px",
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
