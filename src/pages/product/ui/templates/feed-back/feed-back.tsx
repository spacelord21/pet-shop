import { styled, Typography } from "@shared/ui";

const Container = styled.div``;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const FeedBack = () => {
  return (
    <Container>
      <Title variant="title">ВАШИ ОТЗЫВЫ</Title>
    </Container>
  );
};
