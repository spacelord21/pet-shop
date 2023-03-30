import { Bucket } from "@entities/bucket/ui/bucket";
import { $orderWidget } from "@entities/order/model";
import { Separator, styled } from "@shared/ui";
import { useStore } from "effector-react";
import { Footer, Header } from "widgets";

const Container = styled.div<{ isModalOpen: boolean }>`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${({ isModalOpen }) => (isModalOpen ? "fixed" : "")};
`;

export const BucketPage = () => {
  const isModalOpen = useStore($orderWidget);
  return (
    <Container isModalOpen={isModalOpen}>
      <Header />
      <Bucket />
      <Separator />
      <Footer />
      <Separator />
    </Container>
  );
};
