import { Icon } from "@iconify/react";
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
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(0.2)}px;
  font-weight: 300;
`;

const Margin = styled.div`
  height: ${({ theme }) => theme.spacing(0.5)}px;
`;

const NumberLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.1s linear;
  }
`;

const Iconify = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const ContactsSlice = () => {
  return (
    <Container>
      <Title variant="title">контакты</Title>
      <Margin />
      <NumberLink href="tel:+79504345555">
        <Iconify icon={"ic:baseline-phone"} />
        <Text variant="body16">+7 950 434 5555</Text>
      </NumberLink>
      <Margin />
      <NumberLink href="mailto:babkinan809@mail.ru?subject=ПРОСТО_ВКУСНО">
        <Iconify icon={"bxl:gmail"} />
        <Text variant="body16">babkinan809@mail.ru</Text>
      </NumberLink>
    </Container>
  );
};
