import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import icon from "./icon.png";

const Container = styled.div`
  display: block;
  position: absolute;
  left: 30px;
`;

export const Icon = () => {
  const { isNotDesktop } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")} className="shop-icon">
      <img
        className="image"
        src={icon}
        height={isNotDesktop ? 120 : 150}
        width={isNotDesktop ? 120 : 150}
      />
    </Container>
  );
};
