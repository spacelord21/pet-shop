import { Bucket } from "@entities/bucket/ui/bucket";
import { $orderWidget } from "@entities/order/model";
import { Separator, styled } from "@shared/ui";
import { useStore } from "effector-react";
import { Footer, Header } from "widgets";

const Container = styled.div<{ isModalOpen: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${({ isModalOpen }) => (isModalOpen ? "fixed" : "")};
`;

const FootContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const BucketPage = () => {
  const isModalOpen = useStore($orderWidget);
  return (
    <Container isModalOpen={isModalOpen}>
      <Header />
      <Bucket />
      <FootContainer>
        <Footer />
      </FootContainer>
    </Container>
  );
};
