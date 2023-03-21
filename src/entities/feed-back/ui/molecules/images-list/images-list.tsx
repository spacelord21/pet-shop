import { setPopUpImages } from "@entities/feed-back/model";
import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  cursor: pointer;
  &:hover {
    width: 110px;
    height: 110px;
    transition: 0.1s ease-in;
  }
  &:not(:hover) {
    width: 100px;
    height: 100px;
    transition: 0.1s ease-in;
  }
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

type TImagesListProps = {
  images: string[];
};

export const ImagesList = ({ images }: TImagesListProps) => {
  return (
    <>
      <Container>
        <Title variant="body16">Фотографии</Title>
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            onClick={() => setPopUpImages({ index: index, images: images })}
          />
        ))}
      </Container>
    </>
  );
};
