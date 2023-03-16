import { styled } from "@shared/ui";

const Img = styled.img<{ isNotDesktop: boolean }>`
  width: ${({ isNotDesktop }) => (isNotDesktop ? 100 : 150)}px;
  height: ${({ isNotDesktop }) => (isNotDesktop ? 150 : 200)}px;
`;

type TImageProps = {
  imageUrl: string;
  isNotDesktop: boolean;
};

export const Image = ({ imageUrl, isNotDesktop }: TImageProps) => {
  return <Img src={imageUrl} isNotDesktop={isNotDesktop} />;
};
