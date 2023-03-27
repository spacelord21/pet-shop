import { styled } from "@shared/ui";

const Input = styled.input`
  text-decoration: none;
  border: none;
  visibility: hidden;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.palette.text.primary};
  width: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    <Container className="files-input">
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
