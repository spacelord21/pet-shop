import { styled } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { $bucket, fetchBucketFromStorage } from "../model/store";
import { BucketList } from "./organisms";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 100%;
  height: 1200px;
  margin-top: 700px;
`;

export const Bucket = () => {
  const products = useStore($bucket);

  useEffect(() => {
    fetchBucketFromStorage();
  }, []);

  return (
    <Container className="bucket">
      <BucketList products={products} />
    </Container>
  );
};
