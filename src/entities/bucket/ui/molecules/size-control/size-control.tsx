import { increaseSize, reduceSize } from "@entities/bucket/model/store";
import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 0.5px solid ${({ theme }) => theme.palette.accent.secondary};
`;

const Button = styled.button`
  text-decoration: none;
  border: none;
  &:disabled {
    color: ${({ theme }) => theme.palette.accent.grey};
  }
  color: ${({ theme }) => theme.palette.accent.secondary};
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent.secondary};
`;

type TSizeControlProps = {
  size: number;
  id: number;
};

export const SizeControl = ({ size, id }: TSizeControlProps) => {
  return (
    <Container>
      <Button
        onClick={() => {
          reduceSize(id);
        }}
        disabled={size === 100}
      >
        -
      </Button>
      <Text variant="body16">{size}</Text>
      <Button disabled={size === 10000} onClick={() => increaseSize(id)}>
        +
      </Button>
    </Container>
  );
};
