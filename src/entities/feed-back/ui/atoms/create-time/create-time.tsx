import { Typography, styled } from "@shared/ui";

const Content = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  /* position: relative; */
  /* right: 5px; */
`;

type TCreateTimeProps = {
  createTime: string;
};

export const CreateTime = ({ createTime }: TCreateTimeProps) => {
  return <Content variant={"body14"}>{createTime}</Content>;
};
