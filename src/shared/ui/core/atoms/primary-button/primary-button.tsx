import { styled, Typography } from "@shared/ui";
import { ReactNode } from "react";

type TButtonProps = {
  children: string | ReactNode;
  onClick: () => void;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.accent.primary};
  color: ${({ theme }) => theme.palette.text.secondary};
  height: 50px;
  width: 230px;
  &:hover {
    opacity: 0.5;
    transition: 0.5s ease;
    border: none;
  }
  &:not(:hover) {
    opacity: 1;
    transition: 0.7s ease;
  }
`;

export const PrimaryButton = ({ children, onClick }: TButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};
