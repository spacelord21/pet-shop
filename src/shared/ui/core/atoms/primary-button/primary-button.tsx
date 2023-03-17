import { styled, Typography } from "@shared/ui";
import { ReactNode } from "react";

type TButtonProps = {
  children: string | ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
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
  &:disabled {
    background: ${({ theme }) => theme.palette.text.tertiary};
    color: ${({ theme }) => theme.palette.text.secondary};
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const PrimaryButton = ({
  children,
  onClick,
  disabled,
}: TButtonProps) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};
