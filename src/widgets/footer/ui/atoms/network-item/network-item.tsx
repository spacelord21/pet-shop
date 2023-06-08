import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";
import { useIconColor } from "./use-icon-color";
import { keyframes } from "styled-components";
import "./style.css";

const Container = styled.a<{ bg: string; isMobile: boolean }>`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.accent.primary};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.background.lightDark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
    background-color: ${({ bg }) => bg};
    transform: scale(1.3);
  }
  position: relative;
  ${({ isMobile, bg, theme }) =>
    isMobile &&
    `
    background: ${bg};
    color: ${theme.palette.text.secondary};
  `}
`;

const Iconify = styled(Icon)`
  position: absolute;
  left: 8.15px;
`;

type TNetworkItemProps = {
  iconName: string;
  url: string;
  id: number;
};

export const NetworkItem = ({ iconName, url, id }: TNetworkItemProps) => {
  const { isNotDesktop, bgColor } = useIconColor(id);

  return (
    <Container
      href={url}
      target="_blank"
      bg={bgColor()}
      isMobile={isNotDesktop}
      className="icon"
    >
      <Iconify icon={iconName} width={23} />
    </Container>
  );
};
