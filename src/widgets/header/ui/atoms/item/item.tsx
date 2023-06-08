import { styled, Typography } from "@shared/ui";
import { Icon } from "@iconify/react";
import { TItemType } from "widgets/nav-items";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useWindowDimensions } from "@shared/hooks";

type TIsActiveItem = {
  isActive: boolean;
  setActive?: (value: boolean) => void;
  widgetActive?: boolean;
};

const Text = styled(Typography)<{ isNotDesktop: boolean }>`
  ${({ theme, isNotDesktop }) =>
    isNotDesktop &&
    `
    color: ${theme.palette.text.secondary};
  `}
  font-weight: 300;
`;

const Container = styled.div<TIsActiveItem>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: 0.5s ease;
  }
  ${({ isActive, theme }) =>
    isActive &&
    `
     opacity: 0.7;
  `}
`;

type TItemProps = TItemType & TIsActiveItem;

export const Item = ({
  title,
  iconName,
  link,
  isActive,
  setActive,
  widgetActive,
}: TItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isNotDesktop } = useWindowDimensions();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (link === "/contacts") {
      if (widgetActive) setActive!(false);
      const footer = document.querySelector(".footer-comp");
      footer?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(link);
    }
  };

  return (
    <Container onClick={handleClick} isActive={isActive} className="nav-item">
      <Text variant="title" isNotDesktop={isNotDesktop}>
        {title}
      </Text>
      <Icon
        className="nav-item-icon"
        icon={iconName}
        color={
          isNotDesktop
            ? theme.palette.text.secondary
            : theme.palette.accent.primary
        }
        width={title ? 18 : 23}
        height={title ? 18 : 23}
      />
    </Container>
  );
};
