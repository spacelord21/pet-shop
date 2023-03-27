import { styled, Typography } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-left: ${({ theme }) => theme.spacing(0.25)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

type TCreateTimeProps = {
  createTime: string;
};

export const CreateTime = ({ createTime }: TCreateTimeProps) => {
  return <Text variant="body14">{createTime}</Text>;
};
