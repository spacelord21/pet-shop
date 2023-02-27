
import { styled } from "@shared/ui";

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

type TImageProps = {
  imageUrl: string;
};

export const Image = ({ imageUrl }: TImageProps) => {
  return <Img src={imageUrl} />;
};