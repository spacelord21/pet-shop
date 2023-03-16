import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import icon from "./icon.png";

const Container = styled.div`
  display: block;
  position: absolute;
  left: 14px;
`;

export const Icon = () => {
  const { isNotDesktop } = useWindowDimensions();
  return (
    <Container>
      <img
        src={icon}
        height={isNotDesktop ? 120 : 186}
        width={isNotDesktop ? 120 : 186}
      />
    </Container>
  );
};
