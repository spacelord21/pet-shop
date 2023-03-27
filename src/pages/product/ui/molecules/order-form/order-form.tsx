import { useWindowDimensions } from "@shared/hooks";
import { OutlineButton, styled, Typography } from "@shared/ui";
import { Sizes } from "../sizes";

const Container = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ isNotDesktop }) => (isNotDesktop ? "center" : "left")};
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  font-weight: 300;
`;

type Props = {
  setSize: (value: number) => void;
};

export const OrderForm = ({ setSize }: Props) => {
  const { isNotDesktop } = useWindowDimensions();
  return (
    <Container isNotDesktop={isNotDesktop} className="size-choose">
      <Text variant="body14">Количество</Text>
      <Sizes setSize={setSize} />
    </Container>
  );
};
