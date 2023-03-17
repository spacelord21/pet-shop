import { Icon } from "@iconify/react";
import { useWindowDimensions } from "@shared/hooks";
import { styled, Typography } from "@shared/ui";
import { useTheme } from "styled-components";
import { removeAlert } from "../model";
import { TAlert } from "../types";

type TContainerProps = {
  isNotDesktop: boolean;
  width: number;
};

const Container = styled.div<Pick<TAlert, "type"> & TContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  background-color: ${({ type, theme }) =>
    type === "ERROR"
      ? theme.palette.accent.error
      : type === "SUCCESS"
      ? theme.palette.accent.lightGreen
      : theme.palette.accent.yellow};
  position: fixed;
  top: ${({ theme }) => theme.spacing(1)}px;
  left: 50%;
  width: ${({ isNotDesktop, width }) => (isNotDesktop ? width - 16 : 300)}px;
  height: auto;
  min-height: 50px;
  margin-left: ${({ isNotDesktop, width }) =>
    isNotDesktop ? -((width - 16) / 2) : -150}px;
  z-index: 1200;
  border-radius: 10px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type TAlertProps = {
  alert: TAlert;
};

export const Alert = ({ alert }: TAlertProps) => {
  const theme = useTheme();
  const { isNotDesktop, width } = useWindowDimensions();

  return (
    <Container type={alert.type} isNotDesktop={isNotDesktop} width={width}>
      <IconWrapper onClick={() => removeAlert()}>
        <Icon
          icon={"material-symbols:close-rounded"}
          color={theme.palette.text.secondary}
        />
      </IconWrapper>
      <Title variant="body14">{alert.message}</Title>
    </Container>
  );
};
