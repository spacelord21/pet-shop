import { styled, Typography } from "@shared/ui";

const Input = styled.input`
  text-decoration: none;
  border: none;
  color: ${({ theme }) => theme.palette.accent.orange};
  opacity: 0;
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
`;
const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TFilesInputProps = {
  onChangeHandler: (files: File[]) => void;
};

export const FilesInput = ({ onChangeHandler }: TFilesInputProps) => {
  const onFilesPut = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files: File[] = [];
    if (e.target.files && e.target.files.length > 0) {
      for (let i = 0; i < e.target.files?.length; i++) {
        files.push(e.target.files?.item(i)!);
      }
    }
    onChangeHandler(files);
  };

  return (
    <>
      <Text variant="body16">Перетащите или выберите файлы</Text>
      <Input type="file" onChange={onFilesPut} accept=".jpg,.png,.gif,.jpeg" />
    </>
  );
};
