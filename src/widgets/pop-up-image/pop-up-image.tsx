import { $popUpImages, setPopUpImages } from "@entities/feed-back/model";
import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

const Wrapper = styled.div<{ isEmpty: boolean }>`
  z-index: 2000;
  position: fixed;
  opacity: ${({ isEmpty }) => (isEmpty ? 1 : 0)};
  width: ${({ isEmpty }) => (isEmpty ? 100 : 0)}%;
  height: ${({ isEmpty }) => (isEmpty ? 100 : 0)}%;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const LeftArrow = styled.div``;

const RightArrow = styled.div``;

const CloseButton = styled.div`
  position: relative;
  top: -230px;
  right: 35px;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 5px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const PopUpImage = () => {
  const popUpImages = useStore($popUpImages);
  const [index, setIndex] = useState<number>(0);
  const theme = useTheme();
  const iconSize = { width: 50, height: 50 };

  useEffect(() => {
    setIndex(popUpImages.index);
  }, [popUpImages.index]);

  const leftArrowHandlerClick = () => {
    index === 0
      ? setIndex(popUpImages.images.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  };

  const rightArrowHandlerClick = () => {
    index === popUpImages.images.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  };

  const leftArrowColor = theme.palette.accent.primary;
  const rightArrowColor = theme.palette.accent.primary;

  return (
    <Wrapper isEmpty={!!popUpImages.images.length}>
      <LeftArrow>
        <Icon
          icon={"material-symbols:keyboard-double-arrow-left-sharp"}
          color={leftArrowColor}
          onClick={leftArrowHandlerClick}
          {...iconSize}
        />
      </LeftArrow>
      <Image src={popUpImages.images[index]} />
      <RightArrow>
        <Icon
          icon={"material-symbols:keyboard-double-arrow-right"}
          color={rightArrowColor}
          {...iconSize}
          onClick={rightArrowHandlerClick}
        />
      </RightArrow>
      <CloseButton onClick={() => setPopUpImages({ index: 0, images: [] })}>
        <Icon
          icon={"carbon:close-outline"}
          color={theme.palette.accent.primary}
          width={24}
          height={24}
        />
      </CloseButton>
    </Wrapper>
  );
};
