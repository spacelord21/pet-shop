import { selectors, setPhoneNumber } from "@entities/order/model/order-form";
import PhoneInput from "react-phone-number-input/input";
import { styled } from "@shared/ui";
import React from "react";

const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.spacing(2.2)}px;
  resize: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.palette.accent.secondary};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.typography.body14.fontFamily};
  font-size: ${({ theme }) => theme.typography.body14.size};
  color: ${({ theme }) => theme.palette.text.tertiary};
  text-align: left;
  padding: 8px;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const PhoneNumber = () => {
  const { phoneNumber, formError } = selectors();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <PhoneInput
      ref={inputRef}
      onFocus={handleClick}
      onChange={setPhoneNumber}
      country="RU"
      value={phoneNumber}
      withCountryCallingCode={false}
      inputComponent={Input}
      placeholder="Введите номер телефона"
      smartCaret={true}
    />
  );
};
