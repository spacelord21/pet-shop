import { styled } from "@shared/ui";

const Image = styled.img`
  border-radius: 50%;
  width: 46px;
  height: 46px;
`;

type TAvatarProps = {
  url: string;
};

export const Avatar = ({ url }: TAvatarProps) => {
  return <Image src={url} />;
};
