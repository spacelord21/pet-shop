import { styled } from "@shared/ui";

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

type TImageProps = {
  imageUrl: string;
};

export const Image = ({ imageUrl }: TImageProps) => {
  return <Img src={imageUrl} />;
};
