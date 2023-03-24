import { Typography, styled } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: 12px;
`;

type TNameProps = {
  name: string;
};

export const Name = ({ name }: TNameProps) => {
  return <Text variant="body16">{name}</Text>;
};
