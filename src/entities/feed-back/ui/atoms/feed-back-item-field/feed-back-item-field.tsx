import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(1.5)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Content = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-left: ${({ theme }) => theme.spacing(0.5)}px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  text-align: justify;
  word-wrap: break-word;
`;

type TProps = {
  title: string;
  content: string;
};

export const FeedBackItemField = ({ content, title }: TProps) => {
  return content ? (
    <Container className="feedback-field">
      <Title className="feed-back-title" variant="body16">
        {title}
      </Title>
      <Content className="feed-back-content" variant="body16">
        {content}
      </Content>
    </Container>
  ) : null;
};
