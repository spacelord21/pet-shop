import { selectors, setName } from "@entities/order/model/order-form";
import { styled } from "@shared/ui";
import React from "react";

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: ${({ theme }) => theme.spacing(2.2)}px;
  resize: none;
  border: 2px solid
    ${({ theme, hasError }) =>
      hasError ? theme.palette.accent.error : theme.palette.accent.secondary};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.typography.body14.fontFamily};
  font-size: ${({ theme }) => theme.typography.body14.size};
  color: ${({ theme }) => theme.palette.text.tertiary};
  text-align: left;
  padding: 8px;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const NameInput = () => {
  const { name, formError } = selectors();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Input
      onClick={handleClick}
      hasError={formError && name.length === 0}
      value={name}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value)
      }
      placeholder={"Введите ваше имя"}
    />
  );
};
