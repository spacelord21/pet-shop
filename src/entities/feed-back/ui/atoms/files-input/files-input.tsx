import { styled } from "@shared/ui";

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
  margin-left: ${({ theme }) => theme.spacing(9)}px;
  width: 100%;
`;

type TFilesInputProps = {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  withLabel?: boolean;
};

export const FilesInput = ({
  onChangeHandler,
  withLabel,
}: TFilesInputProps) => {
  return (
    <Container>
      {withLabel ? (
        <Label htmlFor="files">
          Перетащите файлы, или выберите на компьютере
        </Label>
      ) : null}

      <Input
        type="file"
        onChange={onChangeHandler}
        accept=".jpg,.png,.gif,.jpeg"
        id="files"
      />
    </Container>
  );
};
