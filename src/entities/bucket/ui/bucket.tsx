import { styled } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect, useMemo } from "react";
import { $bucket, fetchBucketFromStorage } from "../model/store";
import { BucketList, OrderSummary } from "./organisms";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const Bucket = () => {
  const products = useStore($bucket);

  useEffect(() => {
    fetchBucketFromStorage();
  }, []);

  const totalPrice = useMemo(() => {
    let price = 0;
    products.forEach((product) => {
      price += (product.size * product.price) / 100;
    });
    return price;
  }, [products]);

  return (
    <Container className="bucket">
      <BucketList products={products} />
      {totalPrice ? <OrderSummary totalPrice={totalPrice} /> : null}
    </Container>
  );
};
