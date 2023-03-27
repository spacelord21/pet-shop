import { styled, Typography } from "@shared/ui";

type TIsActiveItem = {
  isActive: boolean;
};

const Container = styled.a<TIsActiveItem>`
  opacity: ${({ isActive }) => (isActive ? 0.5 : 1)};
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  &:not(:hover) {
    opacity: ${({ isActive }) => (isActive ? 0.5 : 1)};
  }
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TNavItemProps = {
  isActive: boolean;
  url: string;
  title: string;
};

export const NavItem = ({ isActive, url, title }: TNavItemProps) => {
  return (
    <Container href={url} isActive={isActive}>
      <Text variant="title">{title}</Text>
    </Container>
  );
};
