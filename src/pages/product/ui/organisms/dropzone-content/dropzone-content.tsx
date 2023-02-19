import { Icon } from "@iconify/react";
import { styled, Typography } from "@shared/ui";
import { useState } from "react";
import { useTheme } from "styled-components";
import { FilesInput, Image } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent.primary};
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

  return (
    <>
      <Container>
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
          </ImagesContainer>
        ) : (
          <FilesInput onChangeHandler={onChangeHandler} withLabel={true} />
        )}
      </Container>
      {files.length ? (
        <Text variant="body16">Загружено {files.length}/3</Text>
      ) : null}
    </>
  );
};
