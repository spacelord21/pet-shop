import { $popUpImages, setPopUpImages } from "@entities/feed-back/model";
import { Icon } from "@iconify/react";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

const Wrapper = styled.div<{ isEmpty: boolean }>`
  z-index: 2000;
  position: fixed;
  width: 100%;
  height: 100%;
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

const RightArrow = styled.div`
  margin-left: -25px;
`;

const CloseButton = styled.div`
  height: 30px;
  position: relative;
  top: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img<{ isNotDesktop: boolean; deviceWidth: number }>`
  width: ${({ isNotDesktop, deviceWidth }) =>
    isNotDesktop ? deviceWidth - 128 : 500}px;
  height: auto;
  max-height: 500px;
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
  const { isNotDesktop, width } = useWindowDimensions();

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
    <Wrapper
      isEmpty={!!popUpImages.images.length}
      className="pop-image wrapper"
    >
      <LeftArrow className="left-arrow">
        <Icon
          icon={"material-symbols:keyboard-double-arrow-left-sharp"}
          color={leftArrowColor}
          onClick={leftArrowHandlerClick}
          {...iconSize}
        />
      </LeftArrow>
      <ImageContainer className="image">
        <Image
          src={popUpImages.images[index]}
          isNotDesktop={isNotDesktop}
          deviceWidth={width}
        />
        <CloseButton
          onClick={() => setPopUpImages({ index: 0, images: [] })}
          className="close-button"
        >
          <Icon
            icon={"carbon:close-outline"}
            color={theme.palette.accent.primary}
            width={24}
            height={24}
          />
        </CloseButton>
      </ImageContainer>

      <RightArrow className="right-arrow">
        <Icon
          icon={"material-symbols:keyboard-double-arrow-right"}
          color={rightArrowColor}
          {...iconSize}
          onClick={rightArrowHandlerClick}
        />
      </RightArrow>
    </Wrapper>
  );
};
