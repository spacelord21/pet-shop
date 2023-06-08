import { useWindowDimensions } from "@shared/hooks";
import { useTheme } from "styled-components";

export const useIconColor = (id: number) => {
  const { isNotDesktop } = useWindowDimensions();

  const theme = useTheme();
  const telegram = theme.palette.accent.telegram;
  const instagram = theme.palette.accent.instagram;
  const whatsapp = theme.palette.accent.whatsapp;
  const gmail = theme.palette.accent.gmail;

  const gradientBackgroundColor = () => {
    switch (id) {
      case 1: {
        return "linear-gradient(90deg, rgba(15,150,250,1) 0%, rgba(3,169,244,1) 50%, rgba(70,252,248,1) 100%)";
      }
      case 2: {
        return "linear-gradient(90deg, rgba(20,160,20,1) 0%, rgba(37,211,102,1) 50%, rgba(70,252,248,1) 100%)";
      }
      case 3: {
        return "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
      }
      case 4: {
        return "linear-gradient(90deg, rgba(250,126,15,1) 0%, rgba(244,3,3,1) 50%, rgba(252,70,136,1) 100%)";
      }
      default: {
        return theme.palette.accent.primary;
      }
    }
  };

  const backgroundColor = () => {
    switch (id) {
      case 1: {
        return telegram;
      }
      case 2: {
        return whatsapp;
      }
      case 3: {
        return instagram;
      }
      case 4: {
        return gmail;
      }
      default: {
        return theme.palette.accent.primary;
      }
    }
  };

  return {
    isNotDesktop,
    bgColor: isNotDesktop ? gradientBackgroundColor : backgroundColor,
  };
};
