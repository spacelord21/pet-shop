import { Typography, styled } from "@shared/ui";

const Comment = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: 5px;
  word-wrap: break-word;
  text-align: justify;
  width: 100%;
`;

type TContentProps = {
  content: string;
};

export const Content = ({ content }: TContentProps) => {
  return (
    <Comment variant="body16" className="comment-content">
      {content}
    </Comment>
  );
};
