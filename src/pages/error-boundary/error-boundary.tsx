import { styled, Typography } from "@shared/ui";
import React, { ReactNode, ErrorInfo } from "react";

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(1)}px;
  cursor: pointer;
`;

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Title variant="title2">Извините... Произошла ошибка</Title>
          <Title variant="title" onClick={() => location.reload()}>
            Перезагрузить страницу
          </Title>
        </Container>
      );
    }

    return this.props.children;
  }
}
