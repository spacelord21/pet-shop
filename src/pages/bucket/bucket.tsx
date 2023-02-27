import { Bucket } from "@entities/bucket/ui/bucket";
import { Separator, styled } from "@shared/ui";
import { Footer, Header } from "widgets";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: column;
  align-items: center;
`;

export const BucketPage = () => {
  return (
    <>
      <Container>
        <Header />

        <Bucket />
        <Separator />

        <Footer />
        <Separator />
      </Container>
    </>
  );
};
