import { Icon } from "@iconify/react";
import { StarRating, styled, Typography } from "@shared/ui";
import { useState } from "react";
import { useTheme } from "styled-components";
import { TextArea } from "../../atoms";
import { FeedBackField } from "../../molecules/feed-back-field";

const Container = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const IconWrapper = styled.div``;

type TFeedBackFormProps = {
  setIsActive: (value: boolean) => void;
};

export const FeedBackForm = ({ setIsActive }: TFeedBackFormProps) => {
  const [dignities, setDignities] = useState("");
  const [disadvantages, setDisadvantages] = useState("");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Title variant="title">Ваш отзыв очень важен!</Title>
        <IconWrapper onClick={() => setIsActive(false)}>
          <Icon
            icon={"material-symbols:close"}
            color={theme.palette.accent.primary}
          />
        </IconWrapper>
      </Header>
      <StarRating height={25} maxValue={5} readOnly={false} width={25} />
      <FeedBackField
        text={name}
        setText={setName}
        title="Ваше имя"
        key={1}
        isName={true}
      />
      <FeedBackField
        text={dignities}
        setText={setDignities}
        title={"Достоинства"}
        isName={false}
        key={2}
      />
      <FeedBackField
        text={disadvantages}
        setText={setDisadvantages}
        title={"Недостатки"}
        isName={false}
        key={3}
      />
      <FeedBackField
        text={comment}
        setText={setComment}
        title={"Комментарий"}
        isName={false}
        key={4}
      />
    </Container>
  );
};
