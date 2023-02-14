import { OutlineButton, styled, Typography } from "@shared/ui";
import { Sizes } from "../sizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  font-weight: 200;
`;

type Props = {
  setSize: (value: number) => void;
};

export const OrderForm = ({ setSize }: Props) => {
  return (
    <Container>
      <Text variant="body14">Количество</Text>
      <Sizes setSize={setSize} />
    </Container>
  );
};
