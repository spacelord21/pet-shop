import { size } from "@shared/ui";
import { useEffect, useMemo, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = useMemo(() => {
    return (
      windowDimensions.width >= size.mobileS &&
      windowDimensions.width <= size.mobileL
    );
  }, [windowDimensions.width]);

  const isTablet = useMemo(() => {
    return (
      windowDimensions.width > size.mobileL &&
      windowDimensions.width < size.laptop
    );
  }, [windowDimensions.width]);

  return {
    isMobile,
    isTablet,
    width: windowDimensions.width,
    height: windowDimensions.height,
  };
};
