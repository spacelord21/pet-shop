import { Loader, styled } from "@shared/ui";
import { useTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  min-height: 100vh;
`;

export const Fallback = () => {
  const theme = useTheme();
  return (
    <Container>
      <Loader color={theme.palette.accent.primary} width={50} height={50} />
    </Container>
  );
};
