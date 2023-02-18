import { styled, Typography } from "@shared/ui";

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent.primary};
`;

type TFilesLengthProps = {
  filesLength: number;
};

export const FilesLength = ({ filesLength }: TFilesLengthProps) => {
  return <Title variant="body16">Загружено {filesLength}/3</Title>;
};
