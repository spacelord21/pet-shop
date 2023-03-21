import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";
import { Typography } from "../../atoms";
import { useTheme } from "styled-components";
import { useWindowDimensions } from "@shared/hooks";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
  position: relative;
`;

const IconWrapper = styled.div`
  margin-top: 5px;
  position: absolute;
  right: 0;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type THeaderProps = {
  setIsActive: (value: boolean) => void;
  title: string;
};

export const Header = ({ setIsActive, title }: THeaderProps) => {
  const theme = useTheme();
  const { isNotDesktop } = useWindowDimensions();
  return (
    <Container>
      <Title variant={isNotDesktop ? "title" : "body24"}>{title}</Title>
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
