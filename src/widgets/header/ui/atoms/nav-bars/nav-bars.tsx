import { Icon as Iconify } from "@iconify/react";
import { useTheme } from "styled-components";
import { styled } from "@shared/ui";

const BarsWrapper = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.spacing(1)}px;
  z-index: 5000;
  top: 18px;
  cursor: pointer;
`;

type TNavBarsProps = {
  setWidgetActive: (value: boolean) => void;
};

export const NavBars = ({ setWidgetActive }: TNavBarsProps) => {
  const theme = useTheme();
  return (
    <BarsWrapper
      onClick={() => setWidgetActive(true)}
      onTouchEnd={() => setWidgetActive(true)}
    >
      <Iconify
        icon={"uil:bars"}
        color={theme.palette.accent.primary}
        width={40}
      />
    </BarsWrapper>
  );
};
