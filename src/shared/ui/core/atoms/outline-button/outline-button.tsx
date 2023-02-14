import { styled } from "@shared/ui";
import { ReactNode } from "react";

type TButtonProps = {
  children: string | ReactNode;
  onClick: () => void;
  width?: number;
  height?: number;
};

type TStyledButtonProps = Pick<TButtonProps, "width" | "height">;

const Button = styled.button<TStyledButtonProps>`
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  height: ${({ height }) => height ?? 50}px;
  width: ${({ width }) => width ?? 230}px;
  border: 0.3px solid black;
  &:hover {
    opacity: 0.7;
    transition: 0.5s ease;
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
  }
`;

export const OutlineButton = ({
  children,
  onClick,
  width,
  height,
}: TButtonProps) => {
  return (
    <Button onClick={onClick} width={width} height={height}>
      {children}
    </Button>
  );
};
