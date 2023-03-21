import { OrderWindow } from "@entities/order/ui/organisms";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect, useMemo } from "react";
import { $bucket, fetchBucketFromStorage } from "../model/store";
import { BucketList, OrderSummary } from "./organisms";

const Container = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: ${({ isNotDesktop }) =>
    isNotDesktop ? "center" : "flex-start"};
  flex-direction: ${({ isNotDesktop }) => (isNotDesktop ? "column" : "row")};
`;

export const Bucket = () => {
  const products = useStore($bucket);
  const { isMobile, isTablet } = useWindowDimensions();

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
    <Container className="bucket" isNotDesktop={isMobile || isTablet}>
      <BucketList products={products} />
      {totalPrice ? <OrderSummary totalPrice={totalPrice} /> : null}
      <OrderWindow />
    </Container>
  );
};
