import { Icon } from "@iconify/react";
import { styled, Typography } from "@shared/ui";
import { useTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div``;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

type THeaderProps = {
  setIsActive: (value: boolean) => void;
};

export const Header = ({ setIsActive }: THeaderProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Title variant="title">Ваш отзыв очень важен!</Title>
      <IconWrapper onClick={() => setIsActive(false)}>
        <Icon
          icon={"material-symbols:close"}
          color={theme.palette.accent.primary}
        />
      </IconWrapper>
    </Container>
  );
};
