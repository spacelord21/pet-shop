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
      dark: "#302F51",
      lightDark: "#57557D",
    },
    text: {
      primary: "#302F51",
      secondary: "#FFFAF5",
      tertiary: "#57557D",
      quaternary: "#BBE8B4",
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
      telegram: "#03A9F4",
      whatsapp: "#25d366",
      instagram: "#cc39a4",
      gmail: "#ea4335",
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
      size: "20px",
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
      letterSpacing: "1.5px",
    },
    body12: {
      size: "10px",
      fontFamily: "Roboto",
      letterSpacing: "0.4px",
    },
    body16: {
      size: "16px",
      fontFamily: "Roboto",
      letterSpacing: "0.15px",
    },
    title2: {
      size: "32px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    body14: {
      size: "14px",
      fontFamily: "Roboto",
      letterSpacing: "0.1px",
    },
    button: {
      size: "14px",
      fontFamily: "Roboto",
      letterSpacing: "1.25px",
    },
    body24: {
      size: "24px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
