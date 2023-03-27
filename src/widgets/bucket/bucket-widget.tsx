import { $bucket, $bucketWidgetActive } from "@entities/bucket/model/store";
import { useWindowDimensions } from "@shared/hooks";
import { Separator, styled } from "@shared/ui";
import { useStore } from "effector-react";
import { Footer, Header } from "./ui/molecules";
import { BucketList } from "./ui/organisms";

type TWrapperProps = {
  isActive: boolean;
  isNotDesktop: boolean;
};

const Wrapper = styled.div<TWrapperProps>`
  z-index: 1999;
  position: fixed;
  height: 100%;
  width: ${({ isNotDesktop }) => (isNotDesktop ? 100 : 25)}%;
  right: 0;
  background-color: ${({ theme }) => theme.palette.background.primary};
  animation: ${({ isActive }) => (isActive ? "show-bucket" : "hide-bucket")} 1s
    normal;
  overflow-y: scroll;
  @keyframes show-bucket {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
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
  transition: all 0.5s ease-in;
  position: fixed;
  top: 0;
  left: 0;
`;

export const BucketWidget = () => {
  const products = useStore($bucket);
  const isActive = useStore($bucketWidgetActive);
  const { isNotDesktop } = useWindowDimensions();

  return (
    <Container isActive={isActive} className="bucket-widget-container">
      <Wrapper
        isActive={isActive}
        isNotDesktop={isNotDesktop}
        className="bucket-widget-body"
      >
        <Header />
        <BucketList products={products} />
        <Separator />
        <Footer />
      </Wrapper>
    </Container>
  );
};
