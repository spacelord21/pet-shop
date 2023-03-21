import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32%;
  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(1)}px;
  }
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing(0.2)}px;
`;

const NumberLink = styled.a`
  /* margin-top: ${({ theme }) => theme.spacing(2)}px; */
  text-decoration: none;
`;

export const ContactsSlice = () => {
  return (
    <Container>
      <Title variant="title">КОНТАКТЫ</Title>
      <NumberLink href="tel:+79504345555">
        <Text variant="body16">+7 950 434 5555</Text>
      </NumberLink>
      <Text variant="body16">babkinan809@mail.ru</Text>
    </Container>
  );
};
