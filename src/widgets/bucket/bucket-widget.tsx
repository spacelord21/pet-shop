import { $bucket } from "@entities/bucket/model/store";
import { Separator, styled } from "@shared/ui";
import { useStore } from "effector-react";
import { Footer, Header } from "./ui/molecules";
import { BucketList } from "./ui/organisms";

const Wrapper = styled.div`
  z-index: 1999;
  position: fixed;
  height: 100%;
  width: 400px;
  right: 0;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

const Container = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  position: fixed;
  top: 0;
  left: 0;
`;

export const BucketWidget = () => {
  const products = useStore($bucket);

  return (
    <Container>
      <Wrapper>
        <Header />
        <BucketList products={products} />
        <Separator />
        <Footer />
      </Wrapper>
    </Container>
  );
};
