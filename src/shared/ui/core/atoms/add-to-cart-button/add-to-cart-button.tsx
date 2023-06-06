import { styled } from "../../../styled";
import { Typography } from "../typography";
import { Icon } from "@iconify/react";
import { useTheme } from "styled-components";
import "./styles.css";

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.text.primary};
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  position: absolute;
  left: ${({ theme }) => theme.spacing(3.5)}px;
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.text.tertiary};
`;

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const AddToCartButton = ({ onClick }: Props) => {
  const theme = useTheme();
  return (
    <Button onClick={onClick} className="add-to-cart-button">
      <ButtonText variant="button" className="text">
        Добавить
      </ButtonText>
      <IconWrapper className="cart" id="cart">
        <Icon
          icon={"teenyicons:bag-outline"}
          color={theme.palette.text.secondary}
          width={23}
          height={23}
        />
      </IconWrapper>
    </Button>
  );
};
