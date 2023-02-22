import { Bucket } from "@entities/bucket/ui/bucket";
import { Separator } from "@shared/ui";
import { Footer, Header } from "widgets";

export const BucketPage = () => {
  return (
    <>
      <Header />
      <Bucket />
      <Separator />
      <Footer />
      <Separator />
    </>
  );
};
