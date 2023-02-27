import { increaseSize, reduceSize } from "@entities/bucket/model/store";
import { Icon } from "@iconify/react";
import { styled, Typography } from "@shared/ui";
import { useTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 0.5px solid ${({ theme }) => theme.palette.accent.primary};
  height: 27px;
  width: 100px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

const Button = styled.button`
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  &:disabled {
    color: ${({ theme }) => theme.palette.accent.grey};
  }
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: ${({ theme }) => theme.spacing(0.5)}px;
  margin-right: ${({ theme }) => theme.spacing(0.5)}px;
`;

type TSizeControlProps = {
  size: number;
  id: number;
};

export const SizeControl = ({ size, id }: TSizeControlProps) => {
  const sizeIcon = { width: 20, height: 20 };
  const theme = useTheme();
  return (
    <Container>
      <Button
        onClick={() => {
          reduceSize(id);
        }}
        disabled={size === 100}
      >
        <Icon
          icon={"ic:round-minus"}
          color={theme.palette.text.primary}
          {...sizeIcon}
        />
      </Button>
      <Text variant="body16">{size}</Text>
      <Button
        disabled={size === 10000}
        onClick={() => increaseSize({ id: id, size: 100 })}
      >
        <Icon
          icon={"ic:round-plus"}
          color={theme.palette.text.primary}
          {...sizeIcon}
        />
      </Button>
    </Container>
  );
};
