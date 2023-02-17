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
};

export const StarRating = ({
  maxValue,
  readOnly,
  width,
  height,
  realRating,
}: TStarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const setHoverFn = (value: number | null) => {
    if (readOnly) return;
    setHover(value);
  };

  const setRatingFn = (value: number) => {
    if (readOnly) return;
    setRating(value);
  };

  return (
    <Container>
      <StarList
        maxValue={maxValue}
        width={width}
        height={height}
        hover={hover!}
        setHoverFn={setHoverFn}
        localeRating={rating}
        realRating={realRating}
        setRatingFn={setRatingFn}
      />
    </Container>
  );
};
