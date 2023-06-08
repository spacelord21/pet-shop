import { styled, Typography } from "@shared/ui";
import { sizes } from "./sizes-data";

const Button = styled.button<{ isActive: boolean }>`
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  height: 25px;
  width: 40px;
  border: 0.3px solid black;
  ${({ isActive, theme }) =>
    isActive &&
    `
    color: ${theme.palette.text.secondary};
    background-color: ${theme.palette.accent.primary};
  `}
  &:hover {
    opacity: 0.7;
    transition: 0.2s ease;
    color: ${({ theme }) => theme.palette.text.secondary};
    background-color: ${({ theme }) => theme.palette.accent.primary};
  }
  &:not(:hover) {
    transition: 0.2s ease-out;
  }
  margin-right: ${({ theme }) => theme.spacing(0.5)}px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(0.7)}px;
  width: 80%;
`;

type Props = {
  setSize: (value: number) => void;
  activeSize: number;
};

export const Sizes = ({ setSize, activeSize }: Props) => {
  return (
    <Container className="sizes">
      {sizes.map((size, index) => (
        <Button
          isActive={activeSize == size}
          className="size-button"
          key={index}
          onClick={() => {
            setSize(size);
          }}
        >
          <Typography variant="body12" className="size">
            {size}
          </Typography>
        </Button>
      ))}
    </Container>
  );
};
