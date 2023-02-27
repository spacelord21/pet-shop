import { styled } from "@shared/ui";
import icon from "./icon.png";

const Container = styled.div`
  display: block;
  position: absolute;
  left: 14px;
`;

export const Icon = () => {
  return (
    <Container>
      <img src={icon} height={186} width={186} />
    </Container>
  );
};
