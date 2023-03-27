import { Typography, styled } from "@shared/ui";

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;
type TFeedbackOwnerProps = {
  name: string;
};

export const FeedbackOwner = ({ name }: TFeedbackOwnerProps) => {
  return (
    <Title variant="title" className="feeedback-name">
      {name}
    </Title>
  );
};
