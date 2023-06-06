import { $bucket, $bucketWidgetActive } from "@entities/bucket/model/store";
import { useWindowDimensions } from "@shared/hooks";
import { Separator, styled } from "@shared/ui";
import { useStore } from "effector-react";
import { Footer, Header } from "./ui/molecules";
import { BucketList } from "./ui/organisms";
import { CSSTransition } from "react-transition-group";

type TWrapperProps = {
  isNotDesktop: boolean;
};
const duration = 500;

const Wrapper = styled.div<TWrapperProps>`
  z-index: 1999;
  position: fixed;
  top: 0;
  height: 100%;
  width: ${({ isNotDesktop }) => (isNotDesktop ? 100 : 25)}%;
  right: 0;
  background-color: ${({ theme }) => theme.palette.background.primary};
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.palette.accent.primary};
  &.modal-transition-enter {
    transform: translateX(100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${duration}ms;
    transform: translateX(0);
  }
  &.modal-transition-exit {
    transform: translateX(0);
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(100%);
  }
`;

export const BucketWidget = () => {
  const products = useStore($bucket);
  const isActive = useStore($bucketWidgetActive);
  const { isNotDesktop } = useWindowDimensions();

  const bucketContent = (
    <Wrapper isNotDesktop={isNotDesktop} className="bucket-widget-body">
      <Header />
      <BucketList products={products} />
      <Separator />
      <Footer />
    </Wrapper>
  );

  return (
    <CSSTransition
      in={isActive}
      timeout={duration}
      unmountOnExit
      classNames={"modal-transition"}
    >
      {bucketContent}
    </CSSTransition>
  );
};
