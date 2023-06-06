import { styled } from "@shared/ui";
import { TTextAreaProps } from "./text-area";

type Area = Pick<TTextAreaProps, "isActive" | "isName">;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
`;

export const Area = styled.textarea<Area>`
  width: 100%;
  height: ${({ theme }) => theme.spacing(2.2)}px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.palette.accent.secondary};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.typography.body14.fontFamily};
  font-size: ${({ theme }) => theme.typography.body14.size};
  color: ${({ theme }) => theme.palette.text.tertiary};
  text-align: left;
  padding: 8px;
  overflow: hidden;
  outline: none;
  &:focus {
    ${({ isName, theme }) =>
      !isName &&
      `height:  ${theme.spacing(6)}px;
    overflow-y: auto;
    transition: height 0.2s ease-in-out;
    border: 0.5px solid ${theme.palette.accent.primary};
    `}
  }
  &:not(:focus) {
    height: ${({ theme }) => theme.spacing(2.2)}px;
    transition: height 0.2s ease-in-out;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.palette.text.primary};
`;
