import { styled } from "@shared/ui";
import { ReactNode } from "react";

type TButtonProps = {
  children: string | ReactNode;
  onClick: () => void;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  height: 50px;
  width: 230px;
  border: 0.3px solid black;
  &:hover {
    background-color: ${({ theme }) => theme.palette.accent.primary};
    color: ${({ theme }) => theme.palette.text.secondary};
    transition: 0.5s ease;
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
  }
`;

export const OutlineButton = ({ children, onClick }: TButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};
