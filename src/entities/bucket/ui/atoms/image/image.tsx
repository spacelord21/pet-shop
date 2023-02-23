import { styled } from "@shared/ui";

const Img = styled.img`
  width: 150px;
  height: 200px;
`;

type TImageProps = {
  imageUrl: string;
};

export const Image = ({ imageUrl }: TImageProps) => {
  return <Img src={imageUrl} />;
};
