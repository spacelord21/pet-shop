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
          d="m8.85 20.225l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425l-.825 3.575Zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 14.2q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Zm0-5.025Z"
        />
      </svg>
    </Container>
  );
};
