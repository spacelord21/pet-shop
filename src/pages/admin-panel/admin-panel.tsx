import { PrimaryButton, styled } from "@shared/ui";
import picture from "../../../public/assets/dog-in-space.png";
import { useEffect, useState } from "react";
import {
  $allFeedbacks,
  $hasPermission,
  fetchAllFeedbacksFx,
  sendAdminInfo,
} from "@entities/admin";
import { useStore } from "effector-react";
import { FeedBackList } from "@entities/feed-back/ui/organisms/feed-back-list";
import { $feedBacks } from "@entities/feed-back/model";
import { FeedBackItem } from "@entities/feed-back/ui/molecules";

const Wrapper = styled.div`
  /* background-color: rgb(118, 116, 164);
  background: radial-gradient(
    circle,
    rgba(118, 116, 164, 1) 0%,
    rgba(49, 48, 82, 1) 66%
  ); */
  background-color: ${({ theme }) => theme.palette.background.primary};
  min-height: 100vh;
`;

const Container = styled.div<{ url: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-repeat: repeat;
  background-image: url(${({ url }) => url});
  background-size: 275px;
`;

const Input = styled.input`
  padding: 16px;
  margin: 16px;
`;

export const AdminPanel = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const hasPermission = useStore($hasPermission);
  const feedbacks = useStore($allFeedbacks);

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendAdminInfo({
      login: login,
      password: password,
    });
  };

  useEffect(() => {
    fetchAllFeedbacksFx();
  }, []);

  return (
    <Wrapper>
      <Container url={picture}>
        {hasPermission ? (
          feedbacks.length === 0 ? (
            <h1>Отзывов нет</h1>
          ) : (
            feedbacks.map((feedback, index) => (
              <FeedBackItem feedBack={feedback} hasOwner={true} key={index} />
            ))
          )
        ) : (
          <>
            <Input
              type="text"
              onChange={handleChangeLogin}
              value={login}
              placeholder={"Login"}
            />
            <Input
              type="password"
              onChange={handleChangePassword}
              value={password}
              placeholder={"Password"}
            />
            <PrimaryButton onClick={handleClick}>Войти</PrimaryButton>
          </>
        )}
      </Container>
    </Wrapper>
  );
};
