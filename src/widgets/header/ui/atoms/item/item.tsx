import { styled, Typography } from "@shared/ui";
import { Icon } from "@iconify/react";
import { TItemType } from "widgets/nav-items";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

type TIsActiveItem = {
  isActive: boolean;
  setActive?: (value: boolean) => void;
  widgetActive?: boolean;
};

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Container = styled.div<TIsActiveItem>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}px;
  text-decoration: none;
  opacity: ${({ isActive }) => (isActive ? 0.5 : 1)};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: 0.5s ease;
  }
  &:not(:hover) {
    opacity: ${({ isActive }) => (isActive ? 0.5 : 1)};
    transition: 0.5s ease-out;
  }
`;

type TItemProps = TItemType & TIsActiveItem;

export const Item = ({
  title,
  iconName,
  id,
  link,
  isActive,
  setActive,
  widgetActive,
}: TItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
    <Container onClick={handleClick} isActive={isActive}>
      <Text variant="title">{title.toLocaleUpperCase()}</Text>
      <Icon
        icon={iconName}
        color={theme.palette.accent.primary}
        width={title ? 20 : 25}
        height={title ? 20 : 25}
      />
    </Container>
  );
};
