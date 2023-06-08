import { selectors } from "@entities/order/model/order-form";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { RadioItem } from "../../atoms";

const Container = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  flex-direction: ${({ isNotDesktop }) => (isNotDesktop ? "column" : "row")};
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  border: 1px solid ${({ theme }) => theme.palette.accent.secondary};
  border-radius: 10px;
`;

export const ComChoose = () => {
  const { isNotDesktop } = useWindowDimensions();
  const { communicationPlace } = selectors();
  const values = ["Telegram", "WhatsApp", "Viber", "Напрямую по телефону"];
  return (
    <Container isNotDesktop={isNotDesktop}>
      {values.map((item, index) => (
        <RadioItem realValue={communicationPlace} value={item} key={index} />
      ))}
    </Container>
  );
};
