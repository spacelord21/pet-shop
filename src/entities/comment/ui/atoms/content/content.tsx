import { Typography, styled } from "@shared/ui";

const Comment = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

type TContentProps = {
  content: string;
};

export const Content = ({ content }: TContentProps) => {
  return <Comment>{content}</Comment>;
};
