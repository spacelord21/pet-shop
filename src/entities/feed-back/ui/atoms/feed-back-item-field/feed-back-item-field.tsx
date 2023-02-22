import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Content = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

type TProps = {
  title: string;
  content: string;
};

export const FeedBackItemField = ({ content, title }: TProps) => {
  return (
    <Container>
      <Title className="feed-back-title" variant="title">
        {title}
      </Title>
      <Content className="feed-back-content" variant="body16">
        {content}
      </Content>
    </Container>
  );
};
