import { styled, Typography } from "@shared/ui";
import { sizes } from "./sizes-data";

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  height: 25px;
  width: 40px;
  border: 0.3px solid black;
  &:hover {
    opacity: 0.7;
    transition: 0.5s ease;
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
  }
  margin-right: ${({ theme }) => theme.spacing(0.5)}px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(0.7)}px;
  width: 80%;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type Props = {
  setSize: (value: number) => void;
};

export const Sizes = ({ setSize }: Props) => {
  return (
    <Container className="sizes">
      {sizes.map((size, index) => (
        <Button
          className="size-button"
          key={index}
          onClick={() => {
            setSize(size);
          }}
        >
          <Text variant="body12" className="size">{size}</Text>
        </Button>
      ))}
    </Container>
  );
};
