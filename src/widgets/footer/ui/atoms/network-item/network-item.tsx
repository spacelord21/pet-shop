import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";

const Container = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.accent.primary};
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

type TNetworkItemProps = {
  iconName: string;
  url: string;
};

export const NetworkItem = ({ iconName, url }: TNetworkItemProps) => {
  return (
    <Container href={url} target="_blank">
      <Icon icon={iconName} width="30" />
    </Container>
  );
};
