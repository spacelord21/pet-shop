import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import icon from "./icon.png";

const Container = styled.div<{ isNotDesktop: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const Icon = () => {
  const { isNotDesktop } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate("/")}
      className="shop-icon"
      isNotDesktop={isNotDesktop}
    >
      <img className="image" src={icon} height={90} width={90} />
    </Container>
  );
};
