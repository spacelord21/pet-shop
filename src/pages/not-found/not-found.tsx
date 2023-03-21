import { OutlineButton, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import picture from "../../../public/assets/dog-in-space.jpg";

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

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container url={picture}>
      <Title variant="title2">Страница не найдена</Title>
      <OutlineButton
        onClick={() => {
          navigate("/");
        }}
      >
        <ButtonText variant="title">Перейти на главную</ButtonText>
      </OutlineButton>
    </Container>
  );
};
