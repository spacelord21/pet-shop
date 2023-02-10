import { styled, Typography } from "@shared/ui";
import MOPS from "../../../../../../public/assets/mops-bg.jpg";

type TContainerAttrs = {
  url: string;
};

const Container = styled.div<TContainerAttrs>`
  background-image: url(${(props) => props.url});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 750px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 400;
`;

const TextBlock = styled.div`
  width: 351px;
  height: 313px;
  z-index: 1;
  position: absolute;
  top: 350px;
  left: 59px;
`;

export const BackgroundPicture = () => {
  return (
    <Container url={MOPS}>
      <TextBlock>
        <Text variant="largeTitle">
          ТВОЙ ЛУЧШИЙ ДРУГ ЗАСЛУЖИВАЕТ ЛУЧШУЮ ЕДУ
        </Text>
      </TextBlock>
    </Container>
  );
};
