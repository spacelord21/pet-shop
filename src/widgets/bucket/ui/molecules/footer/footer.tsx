import { setWidgetActive } from "@entities/bucket/model/store";
import { PrimaryButton, styled } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { TotalPrice } from "../total-price";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 114px;
`;

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container className="bucket-widget-footer">
      <PrimaryButton
        onClick={() => {
          navigate("/bucket");
          setWidgetActive(false);
        }}
      >
        Перейти в корзину
      </PrimaryButton>
    </Container>
  );
};
