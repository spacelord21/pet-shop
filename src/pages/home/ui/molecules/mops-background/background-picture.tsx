import { useWindowDimensions } from "@shared/hooks";
import { size, styled, Typography } from "@shared/ui";
import { TypographyVariants } from "@shared/ui/types";
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
  width: 100vw;
  height: 750px;
  display: flex;
  align-items: center;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 400;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  text-shadow: 0 2px 0 0px ${({ theme }) => theme.palette.accent.primary},
    0 3px 2px 0px ${({ theme }) => theme.palette.accent.primary};
`;

const TextBlock = styled.div<{ isNotDesktop: boolean }>`
  z-index: 1;
  margin-left: ${({ theme, isNotDesktop }) =>
    isNotDesktop ? 0 : theme.spacing(2)}px;
`;

export const BackgroundPicture = () => {
  const { width, isNotDesktop } = useWindowDimensions();

  const handleFontSize = (): TypographyVariants => {
    if (width >= size.mobileS && width <= size.mobileL) {
      return "title40";
    }
    return "largeTitle";
  };

  return (
    <Container url={MOPS} className="pugs background">
      <TextBlock isNotDesktop={isNotDesktop} className="text-block">
        <Text variant={handleFontSize()} className="welcome-title">
          ТВОЙ ЛУЧШИЙ
        </Text>
        <Text variant={handleFontSize()} className="welcome-title">
          ДРУГ
        </Text>
        <Text variant={handleFontSize()} className="welcome-title">
          ЗАСЛУЖИВАЕТ
        </Text>
        <Text variant={handleFontSize()} className="welcome-title">
          ЛУЧШУЮ ЕДУ
        </Text>
      </TextBlock>
    </Container>
  );
};
