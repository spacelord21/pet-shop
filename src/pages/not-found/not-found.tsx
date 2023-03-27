import { OutlineButton, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import picture from "../../../public/assets/dog-in-space.png";

const Wrapper = styled.div`
  background-color: rgb(118, 116, 164);
  background: radial-gradient(
    circle,
    rgba(118, 116, 164, 1) 0%,
    rgba(49, 48, 82, 1) 66%
  );
  background-color: ${({ theme }) => theme.palette.background.primary};
  min-height: 100vh;
`;

const Container = styled.div<{ url: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${({ url }) => url});
  background-repeat: repeat;
  background-size: 300px;
  height: 100vh;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: ${({ theme }) => theme.spacing(6)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container url={picture}>
        <Title variant="title">Страница не найдена</Title>
        <OutlineButton
          onClick={() => {
            navigate("/");
          }}
        >
          Перейти на главную
        </OutlineButton>
      </Container>
    </Wrapper>
  );
};
