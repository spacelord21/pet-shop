import { Star, styled } from "@shared/ui";
import { useTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

type TStarListProps = {
  maxValue: number;
  width: number;
  height: number;
  realRating?: number;
  hover?: number;
  setRatingFn?: (value: number) => void;
  setHoverFn?: (value: number | null) => void;
  localeRating?: number;
};

export const StarList = ({
  maxValue,
  width,
  height,
  realRating,
  hover,
  setRatingFn,
  setHoverFn,
  localeRating,
}: TStarListProps) => {
  const theme = useTheme();
  return (
    <Container>
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;
        return (
          <Star
            key={index}
            value={value}
            fillColor={theme.palette.accent.yellow}
            emptyColor={theme.palette.text.tertiary}
            height={height}
            width={width}
            realRating={realRating!}
            hover={hover!}
            localeRating={localeRating!}
            setHoverFn={setHoverFn}
            setRatingFn={setRatingFn}
          />
        );
      })}
    </Container>
  );
};
