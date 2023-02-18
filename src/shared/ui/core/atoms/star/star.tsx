import { styled } from "@shared/ui";

const Container = styled.div``;

type TStarProps = {
  value: number;
  width: number;
  height: number;
  fillColor: string;
  emptyColor: string;
  realRating?: number;
  setRatingFn?: (value: number) => void;
  setHoverFn?: (value: number | null) => void;
  localeRating?: number;
  hover?: number;
};

export const Star = ({
  value,
  width,
  height,
  fillColor,
  emptyColor,
  realRating,
  setRatingFn,
  setHoverFn,
  localeRating,
  hover,
}: TStarProps) => {
  return (
    <Container
      onClick={() => setRatingFn!(value)}
      onMouseEnter={() => {
        setHoverFn!(value);
      }}
      onMouseLeave={() => setHoverFn!(localeRating ? localeRating : null)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <path
          fill={value <= (realRating! || hover!) ? fillColor : emptyColor}
          d="m12 18.275l-4.15 2.5q-.275.175-.575.15q-.3-.025-.525-.2q-.225-.175-.35-.437q-.125-.263-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513Q3.4 11 3.5 10.725q.1-.275.3-.45q.2-.175.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45q.262-.15.537-.15t.538.15q.262.15.387.45l1.875 4.45l4.85.425q.35.05.55.225q.2.175.3.45q.1.275.038.562q-.063.288-.313.513l-3.675 3.175l1.1 4.725q.075.325-.05.588q-.125.262-.35.437q-.225.175-.525.2q-.3.025-.575-.15Z"
        />
      </svg>
    </Container>
  );
};
