import { styled } from "@shared/ui";
import React from "react";
import { ReactNode } from "react";
import { Typography } from "../typography";

type TButtonProps = {
  children: string | ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: number;
  height?: number;
};

type TStyledButtonProps = Pick<TButtonProps, "width" | "height">;

const Button = styled.button<TStyledButtonProps>`
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  height: ${({ height }) => height ?? 40}px;
  width: ${({ width }) => width ?? 230}px;
  border: 0.3px solid black;
  border-radius: 6px;
  &:hover {
    opacity: 0.7;
    transition: 0.5s ease;
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
  }
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const OutlineButton = ({
  children,
  onClick,
  width,
  height,
}: TButtonProps) => {
  return (
    <Button
      onClick={onClick}
      width={width}
      height={height}
      className="outline button"
    >
      {React.isValidElement(children) ? (
        children
      ) : (
        <ButtonText variant="button" className="button content">
          {children}
        </ButtonText>
      )}
    </Button>
  );
};
