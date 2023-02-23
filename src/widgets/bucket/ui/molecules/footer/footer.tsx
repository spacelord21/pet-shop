import { setWidgetActive } from "@entities/bucket/model/store";
import { PrimaryButton, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 114px;
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <PrimaryButton
        onClick={() => {
          navigate("/bucket");
          setWidgetActive(false);
        }}
      >
        <ButtonText variant="body16">Перейти в корзину</ButtonText>
      </PrimaryButton>
    </Container>
  );
};
