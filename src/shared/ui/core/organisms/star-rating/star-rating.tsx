import { styled } from "@shared/ui";
import { createContext, useState } from "react";
import { StarList } from "../../molecules";

const Container = styled.div``;

type TStarRatingProps = {
  maxValue: number;
  readOnly: boolean;
  width: number;
  height: number;
  realRating?: number;
  localeRating?: number;
  setLocaleRating?: (value: number) => void;
  hover?: number | null;
  setHover?: (value: number | null) => void;
};

export const StarRating = ({
  maxValue,
  readOnly,
  width,
  height,
  realRating,
  localeRating,
  setLocaleRating,
  setHover,
  hover,
}: TStarRatingProps) => {
  const setHoverFn = (value: number | null) => {
    if (readOnly) return;
    setHover!(value);
  };

  const setRatingFn = (value: number) => {
    if (readOnly) return;
    setLocaleRating!(value);
  };

  return (
    <Container>
      <StarList
        maxValue={maxValue}
        width={width}
        height={height}
        hover={hover!}
        setHoverFn={setHoverFn}
        localeRating={localeRating}
        realRating={realRating}
        setRatingFn={setRatingFn}
      />
    </Container>
  );
};
