import { styled, Typography } from "@shared/ui";

const Input = styled.input`
  text-decoration: none;
  border: none;
  visibility: hidden;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.palette.text.primary};
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing(9)}px;
`;

type TFilesInputProps = {
  onChangeHandler: (files: File[]) => void;
  withLabel?: boolean;
};

export const FilesInput = ({
  onChangeHandler,
  withLabel,
}: TFilesInputProps) => {
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
    <Container>
      {withLabel ? (
        <Label htmlFor="files">
          Перетащите файлы, или выберите на компьютере
        </Label>
      ) : null}

      <Input
        type="file"
        onChange={onFilesPut}
        accept=".jpg,.png,.gif,.jpeg"
        id="files"
      />
    </Container>
  );
};
