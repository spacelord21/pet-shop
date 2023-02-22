import { Icon } from "@iconify/react";
import { styled, Typography } from "@shared/ui";
import { useTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`;

const IconWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing(40)}px;
  margin-top: 5px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  position: fixed;
`;

type THeaderProps = {
  setIsActive: (value: boolean) => void;
};

export const Header = ({ setIsActive }: THeaderProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Title variant="body24">Ваш отзыв очень важен!</Title>
      <IconWrapper onClick={() => setIsActive(false)}>
        <Icon
          icon={"carbon:close-outline"}
          color={theme.palette.accent.primary}
          width={24}
          height={24}
        />
      </IconWrapper>
    </Container>
  );
};
