import { useWindowDimensions } from "@shared/hooks";
import { size, styled, Typography } from "@shared/ui";
import { TypographyVariants } from "@shared/ui/types";
import MOPS from "../../../../../../public/assets/mops-bg.png";

const Container = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  position: relative;
  clip-path: inset(0);
  z-index: 0;
`;

const Image = styled.img`
  z-index: -1;
  position: fixed;
  height: 750px;
  width: 100%;
  object-fit: cover;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 400;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  text-shadow: 0 2px 0 0px ${({ theme }) => theme.palette.accent.primary},
    0 3px 2px 0px ${({ theme }) => theme.palette.accent.primary};
`;

const TextBlock = styled.div<{ isNotDesktop: boolean }>`
  z-index: -1;
  margin-left: ${({ theme, isNotDesktop }) =>
    isNotDesktop ? 0 : theme.spacing(2)}px;
  position: fixed;
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
    <Container className="pugs background">
      <Image src={MOPS} width={width} />
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
          ЛУЧШИЕ ЛАКОМСТВА
        </Text>
      </TextBlock>
    </Container>
  );
};
