import { Icon } from "@iconify/react";
import { useWindowDimensions } from "@shared/hooks";
import { styled, Typography } from "@shared/ui";
import { useState } from "react";
import { useTheme } from "styled-components";
import { FilesInput, Image } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  height: 100px;
`;

const AddingBox = styled.div<{ isNotDesktop: boolean }>`
  width: ${({ isNotDesktop }) => (isNotDesktop ? 70 : 100)}px;
  height: ${({ isNotDesktop }) => (isNotDesktop ? 70 : 100)}px;
  border-radius: 10px;
  border: 0.5px solid ${({ theme }) => theme.palette.accent.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  position: relative;
`;

const Plus = styled.label`
  color: ${({ theme }) => theme.palette.accent.grey};
  opacity: 0.8;
  font-size: 35px;
  position: absolute;
  left: auto;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent.primary};
`;

const Input = styled.input`
  visibility: hidden;
  border: 1px solid red;
`;

type TDropZoneContentProps = {
  files: File[];
  onChangeHandler: (files: File[]) => void;
  removeFile: (value: number) => void;
};

export const DropZoneContent = ({
  files,
  onChangeHandler,
  removeFile,
}: TDropZoneContentProps) => {
  const makeImageUrl = (file: File) => {
    return URL.createObjectURL(file);
  };
  const { isNotDesktop } = useWindowDimensions();

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
      <Container className="dropzone-content">
        {files.length ? (
          <ImagesContainer>
            {files.map((file, index) => (
              <Wrapper key={index}>
                <Image
                  imageUrl={makeImageUrl(file)}
                  key={index}
                  removeFile={removeFile}
                  id={index}
                />
              </Wrapper>
            ))}
            {files.length !== 3 ? (
              <AddingBox isNotDesktop={isNotDesktop} className="add-box">
                <Plus htmlFor="files">+</Plus>
                <Input
                  id="files"
                  type={"file"}
                  accept=".jpg,.jpeg,.png,.gif"
                  onChange={onFilesPut}
                />
              </AddingBox>
            ) : null}
          </ImagesContainer>
        ) : (
          <FilesInput onChangeHandler={onFilesPut} withLabel={true} />
        )}
      </Container>
      {files.length ? (
        <Text variant="body16">Загружено {files.length}/3</Text>
      ) : null}
    </>
  );
};
