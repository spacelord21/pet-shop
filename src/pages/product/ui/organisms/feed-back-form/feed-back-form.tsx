import { TFeedBack } from "@entities/feed-back/types";
import { Icon } from "@iconify/react";
import { PrimaryButton, StarRating, styled, Typography } from "@shared/ui";
import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { FilesInput, Header, TextArea } from "../../atoms";
import { FeedBackField } from "../../molecules/feed-back-field";
import { DropZone } from "../../molecules/dropzone";
import { useDropZone } from "./hooks";
import { DropZoneContent } from "../dropzone-content/dropzone-content";

const Container = styled.div`
  width: 678px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
`;

const StarRatingContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.accent.primary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(0.5)}px;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)}px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

type TFeedBackFormProps = {
  setIsActive: (value: boolean) => void;
};

export const FeedBackForm = React.memo(
  ({ setIsActive }: TFeedBackFormProps) => {
    const [feedBackContent, setFeedBackContent] = useState<TFeedBack>({
      name: "",
      comment: "",
      dignities: "",
      disadvantages: "",
    });
    const { files, onDragStateChange, onFilesDrop, removeFile } = useDropZone();

    const feedBackChangeHandle = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      event.preventDefault();
      setFeedBackContent({
        ...feedBackContent,
        [event.target.name]: event.target.value,
      });
    };

    return (
      <Container>
        <Header setIsActive={setIsActive} />
        <StarRatingContainer>
          <StarRating height={30} maxValue={5} readOnly={false} width={30} />
          <Text variant="body16">Общая оценка</Text>
        </StarRatingContainer>
        <FeedBackField
          text={feedBackContent.name}
          name="name"
          setText={feedBackChangeHandle}
          title="Ваше имя"
          key={1}
          isName={true}
        />
        <FeedBackField
          text={feedBackContent.dignities}
          name="dignities"
          setText={feedBackChangeHandle}
          title={"Достоинства"}
          isName={false}
          key={2}
        />
        <FeedBackField
          text={feedBackContent.disadvantages}
          name="disadvantages"
          setText={feedBackChangeHandle}
          title={"Недостатки"}
          isName={false}
          key={3}
        />
        <FeedBackField
          text={feedBackContent.comment}
          name="comment"
          setText={feedBackChangeHandle}
          title={"Комментарий"}
          isName={false}
          key={4}
        />
        <DropZone
          onDragStateChange={onDragStateChange}
          onFilesDrop={onFilesDrop}
        >
          <DropZoneContent
            files={files}
            onChangeHandler={onFilesDrop}
            removeFile={removeFile}
          />
        </DropZone>
        <PrimaryButton onClick={() => {}}>Добавить</PrimaryButton>
      </Container>
    );
  }
);
