import { styled } from "@shared/ui";
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
    background-color: ${({ theme }) => theme.palette.background.primary};
    color: ${({ theme }) => theme.palette.text.primary};
    transition: 0.5s ease;
    border: none;
  }
`;

export const PrimaryButton = ({ children, onClick }: TButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};
