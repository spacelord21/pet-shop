import { Typography, styled } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TNameProps = {
  name: string;
};

export const Name = ({ name }: TNameProps) => {
  return <Text variant="body16">{name ?? "Гость"}</Text>;
};
