import { styled, Typography } from "@shared/ui";
import { Icon } from "@iconify/react";
import { TItemType } from "widgets/header/nav-items";
import { useTheme } from "styled-components";

type TIsActiveItem = {
  isActive: boolean;
};

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Container = styled.a<TIsActiveItem>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}px;
  text-decoration: none;
  opacity: ${({ isActive }) => (isActive ? 0.5 : 1)};
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

export const Item = ({ title, iconName, id, link, isActive }: TItemProps) => {
  const theme = useTheme();
  return (
    <Container href={link} isActive={isActive}>
      <Text variant="title">{title}</Text>
      <Icon
        icon={iconName}
        color={theme.palette.accent.primary}
        width={title ? 20 : 25}
        height={title ? 20 : 25}
      />
    </Container>
  );
};
