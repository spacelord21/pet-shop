import { setWidgetActive } from "@entities/bucket/model/store";
import { Icon } from "@iconify/react";
import { styled, Typography } from "@shared/ui";
import { useTheme } from "styled-components";

const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.accent.primary};
  flex-direction: row;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const IconWrapper = styled.div`
  position: absolute;
  margin-top: 4px;
  left: 8px;
`;

export const Header = () => {
  const theme = useTheme();
  const iconSize = { width: 50, height: 30 };
  return (
    <Container>
      <IconWrapper onClick={() => setWidgetActive(false)}>
        <Icon
          icon={"material-symbols:arrow-right-alt"}
          color={theme.palette.text.secondary}
          {...iconSize}
        />
      </IconWrapper>
      <Title variant="title">Корзина</Title>
    </Container>
  );
};
