import { TFeedBack } from "@entities/feed-back/types";
import { Icon } from "@iconify/react";
import { PrimaryButton, StarRating, styled, Typography } from "@shared/ui";
import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { FilesInput, FilesLength, Header, TextArea } from "../../atoms";
import { FeedBackField } from "../../molecules/feed-back-field";
import { DropZone } from "../dropzone";
import { useDropZone } from "./hooks";

const Container = styled.div`
  width: 678px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
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
    const { files, onDragStateChange, onFilesDrop } = useDropZone();

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
        <StarRating height={25} maxValue={5} readOnly={false} width={25} />
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
          {files.length ? (
            <FilesLength filesLength={files.length} />
          ) : (
            <FilesInput onChangeHandler={onFilesDrop} />
          )}
        </DropZone>
        <PrimaryButton onClick={() => {}}>Добавить</PrimaryButton>
      </Container>
    );
  }
);
