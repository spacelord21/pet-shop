import {
  Loader,
  PrimaryButton,
  StarRating,
  styled,
  Typography,
} from "@shared/ui";
import React, { useEffect } from "react";
import { useState } from "react";
import { FeedBackField } from "../../molecules/feed-back-field";
import { DropZone } from "../../molecules/dropzone";
import { useDropZone } from "./hooks";
import { DropZoneContent } from "../dropzone-content/dropzone-content";
import {
  createFeedbackFx,
  fetchFeedBacksFx,
  selectors,
  setActiveForm,
  setComment,
  setDignities,
  setDisadvantages,
  setName,
  setProductId,
  setRating,
  uploadImagesToCloudinary,
} from "@entities/feed-back/model";
import { TStarRatingProps } from "@shared/ui/core/organisms/star-rating/star-rating";
import { Header } from "@shared/ui/core/molecules";
import { useWindowDimensions } from "@shared/hooks";
import { useStore } from "effector-react";
import { useTheme } from "styled-components";

const Container = styled.div<{ isNotDesktop: boolean; width: number }>`
  width: ${({ isNotDesktop, width }) => (isNotDesktop ? width - 16 : 678)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
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

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type TFeedBackFormProps = {
  productId: number;
};

export const StarRatingWithConteiner = ({
  height,
  maxValue,
  readOnly,
  width,
  hover,
  localeRating,
  realRating,
  setHover,
  setLocaleRating,
}: TStarRatingProps) => {
  return (
    <StarRatingContainer>
      <StarRating
        height={height}
        maxValue={maxValue}
        readOnly={readOnly}
        width={width}
        localeRating={localeRating}
        setLocaleRating={setLocaleRating}
        hover={hover}
        setHover={setHover}
        realRating={realRating}
      />
      <Text variant="body16">Общая оценка</Text>
    </StarRatingContainer>
  );
};

export const FeedBackForm = React.memo(({ productId }: TFeedBackFormProps) => {
  const { comment, dignities, disadvantages, name, rating } = selectors();
  const [hoveringRating, setHover] = useState<number | null>(null);
  const { files, onDragStateChange, onFilesDrop, removeFile } = useDropZone();
  const { isNotDesktop, width } = useWindowDimensions();
  const loading = useStore(createFeedbackFx.pending);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setProductId(productId);
    uploadImagesToCloudinary(files);
  };

  return (
    <Container isNotDesktop={isNotDesktop} width={width}>
      <Header setIsActive={setActiveForm} title={"Ваш отзыв очень важен!"} />
      <StarRatingWithConteiner
        height={30}
        width={25}
        maxValue={5}
        readOnly={false}
        hover={hoveringRating}
        localeRating={rating}
        setHover={setHover}
        setLocaleRating={setRating}
      />
      <FeedBackField
        text={name}
        name="name"
        setText={setName}
        title="Ваше имя"
        key={1}
        isName={true}
      />
      <FeedBackField
        text={dignities}
        name="dignities"
        setText={setDignities}
        title={"Достоинства"}
        isName={false}
        key={2}
      />
      <FeedBackField
        text={disadvantages}
        name="disadvantages"
        setText={setDisadvantages}
        title={"Недостатки"}
        isName={false}
        key={3}
      />
      <FeedBackField
        text={comment}
        name="comment"
        setText={setComment}
        title={"Комментарий"}
        isName={false}
        key={4}
      />
      <DropZone
        onDragStateChange={onDragStateChange}
        onFilesDrop={onFilesDrop}
        isNotDesktop={isNotDesktop}
        width={width}
      >
        <DropZoneContent
          files={files}
          onChangeHandler={onFilesDrop}
          removeFile={removeFile}
        />
      </DropZone>
      <PrimaryButton onClick={onClickHandler} disabled={loading}>
        {loading ? (
          <Loader />
        ) : (
          <ButtonText variant="title">Добавить</ButtonText>
        )}
      </PrimaryButton>
    </Container>
  );
});
