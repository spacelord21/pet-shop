import { selectors, setPhoneNumber } from "@entities/order/model/order-form";
import PhoneInput from "react-phone-number-input/input";
import { styled } from "@shared/ui";

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

export const PhoneNumber = () => {
  const { phoneNumber, formError } = selectors();
  return (
    <PhoneInput
      onChange={setPhoneNumber}
      country="RU"
      value={phoneNumber}
      withCountryCallingCode={false}
      inputComponent={Input}
      hasError={phoneNumber.length === 0 && formError}
      placeholder="Введите номер телефона"
      smartCaret={true}
    />
  );
};
