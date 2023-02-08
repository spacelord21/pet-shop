import { styled, Typography } from "@shared/ui";
import MOPS from "../../../../../../public/assets/mops-bg.jpg";

const Container = styled.div``;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 400;
`;

const TextBlock = styled.div`
  width: 351px;
  height: 313px;
  z-index: 1;
  position: absolute;
  top: 400px;
  left: 59px;
`;

export const BackgroundPicture = () => {
  return (
    <Container>
      <img src={MOPS} width={"100%"} />
      <TextBlock>
        <Text variant="largeTitle">
          ТВОЙ ЛУЧШИЙ ДРУГ ЗАСЛУЖИВАЕТ ЛУЧШУЮ ЕДУ
        </Text>
      </TextBlock>
    </Container>
  );
};
