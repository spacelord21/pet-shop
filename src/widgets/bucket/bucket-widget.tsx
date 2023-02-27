import { $bucket, $bucketWidgetActive } from "@entities/bucket/model/store";
import { Separator, styled } from "@shared/ui";
import { useStore } from "effector-react";
import { Footer, Header } from "./ui/molecules";
import { BucketList } from "./ui/organisms";

const Wrapper = styled.div<{ isActive: boolean }>`
  z-index: 1999;
  position: fixed;
  height: 100%;
  width: 400px;
  right: 0;
  background-color: ${({ theme }) => theme.palette.background.primary};
  animation: ${({ isActive }) => (isActive ? "show-bucket" : "hide-bucket")} 1s
    forwards;
  @keyframes show-bucket {
    0% {
      opacity: 0;
      transform: translateX(500px);
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes hide-bucket {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: translateX(400px);
    }
  }
`;

const Container = styled.div<{ isActive: boolean }>`
  z-index: ${({ isActive }) => (isActive ? 1000 : -1000)};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  transition: all 3s ease;
  position: fixed;
  top: 0;
  left: 0;
`;

export const BucketWidget = () => {
  const products = useStore($bucket);
  const isActive = useStore($bucketWidgetActive);

  return (
    <Container isActive={isActive}>
      <Wrapper isActive={isActive}>
        <Header />
        <BucketList products={products} />
        <Separator />
        <Footer />
      </Wrapper>
    </Container>
  );
};