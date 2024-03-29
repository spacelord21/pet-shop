import { Icon } from "@iconify/react";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { useState } from "react";
import { useTheme } from "styled-components";

type TIsImageHover = {
  isImageHover: boolean;
};

const Img = styled.img<{ isNotDesktop: boolean }>`
  border-radius: 10px;
  width: ${({ isNotDesktop }) => (isNotDesktop ? 70 : 100)}px;
  height: ${({ isNotDesktop }) => (isNotDesktop ? 70 : 100)}px;
`;

const IconWrapper = styled.div<TIsImageHover>`
  opacity: ${({ isImageHover }) => (isImageHover ? 0.8 : 0)};
  background-color: ${({ isImageHover, theme }) =>
    isImageHover ? theme.palette.accent.dark : ""};
  transition: 0.5s ease-in-out;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  position: relative;
  top: -105px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  /* margin-top: ${({ theme }) => theme.spacing(7)}px; */
`;

type TImageProps = {
  id: number;
  imageUrl: string;
  removeFile: (value: number) => void;
};

export const Image = ({ imageUrl, removeFile, id }: TImageProps) => {
  const [isImageHover, setIsImageHover] = useState(false);
  const { isNotDesktop } = useWindowDimensions();
  const theme = useTheme();
  return (
    <Container
      onMouseEnter={() => setIsImageHover(true)}
      onMouseLeave={() => setIsImageHover(false)}
      className="feedback-image"
    >
      <Img src={imageUrl} isNotDesktop={isNotDesktop} />
      <IconWrapper isImageHover={isImageHover} onClick={() => removeFile(id)}>
        <Icon
          icon={"mdi:garbage-can-outline"}
          color={theme.palette.accent.grey}
          width={50}
          height={50}
        />
      </IconWrapper>
    </Container>
  );
};
