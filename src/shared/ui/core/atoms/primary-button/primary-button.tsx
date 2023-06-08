import { styled } from "@shared/ui";
import { Typography } from "../typography";
import React from "react";
import { ReactNode } from "react";

type TButtonProps = {
  children: string | ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.accent.primary};
  color: ${({ theme }) => theme.palette.text.secondary};
  height: 40px;
  width: 230px;
  border: none;
  border-radius: 6px;
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

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const PrimaryButton = ({
  children,
  onClick,
  disabled,
}: TButtonProps) => {
  return (
    <Button onClick={onClick} disabled={disabled} className={"primary-button"}>
      {React.isValidElement(children) ? (
        children
      ) : (
        <ButtonText variant="button">{children}</ButtonText>
      )}
    </Button>
  );
};
