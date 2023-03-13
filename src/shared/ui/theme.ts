const THEME_GRID_STEP = 16;

export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

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
  device: {
    mobileS: `(min-width: ${size.mobileS}px)`,
    mobileM: `(min-width: ${size.mobileM}px)`,
    mobileL: `(min-width: ${size.mobileL}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    laptop: `(min-width: ${size.laptop}px)`,
    laptopL: `(min-width: ${size.laptopL}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
    desktopL: `(min-width: ${size.desktop}px)`,
  },
  typography: {
    title: {
      size: "21px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    title40: {
      size: "40px",
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
