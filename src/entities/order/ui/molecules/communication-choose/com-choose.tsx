import { selectors } from "@entities/order/model/order-form";
import { TCommunicationPlace } from "@entities/order/types";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { RadioItem } from "../../atoms";

const Container = styled.div<{ hasError: boolean; isNotDesktop: boolean }>`
  display: flex;
  flex-direction: ${({ isNotDesktop }) => (isNotDesktop ? "column" : "row")};
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  border: 2px solid
    ${({ theme, hasError }) =>
      hasError ? theme.palette.accent.error : theme.palette.accent.secondary};
  border-radius: 10px;
`;

export const ComChoose = () => {
  const { isNotDesktop } = useWindowDimensions();
  const { communicationPlace, formError } = selectors();
  const values = ["Telegram", "WhatsApp", "Viber", "Напрямую по телефону"];
  return (
    <Container
      hasError={communicationPlace.length === 0 && formError}
      isNotDesktop={isNotDesktop}
    >
      {values.map((item, index) => (
        <RadioItem realValue={communicationPlace} value={item} key={index} />
      ))}
    </Container>
  );
};
