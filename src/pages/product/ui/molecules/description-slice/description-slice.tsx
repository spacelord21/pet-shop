import { Separator, styled, Typography } from "@shared/ui";
import { useState } from "react";
import { keyframes } from "styled-components";

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`;

const Button = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

type TIsActive = {
  isActive: boolean;
};

const Text = styled(Typography)<TIsActive>`
  color: ${({ theme }) => theme.palette.text.tertiary};
  /* margin-bottom: ${({ theme }) => theme.spacing(1)}px; */
  /* height: ${({ isActive }) => (isActive ? "auto" : 0)}; */
  height: 0;
  transition: all 1s ease;
  overflow: ${({ isActive }) => (isActive ? "visible" : "hidden")};

  width: 300px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  animation: ${({ isActive }) => (isActive ? "show-text" : "hide-text")} 0.5s
    forwards;
  @keyframes show-text {
    0% {
      height: 0;
      opacity: 0;
      transform: translateY(-50px);
    }
    50% {
      opacity: 1;
    }
    100% {
      height: auto;
      transform: translateY(0px);
    }
  }
  @keyframes hide-text {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(-50px);
      opacity: 0;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

type TDescriptionSliceProps = {
  content: string;
  title: string;
};

export const DescriptionSlice = ({
  content,
  title,
}: TDescriptionSliceProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Title variant="body16">{title}</Title>
        <Button variant="title" onClick={handleClick}>
          {isPressed ? "-" : "+"}
        </Button>
      </Container>
      <Separator width={100} />
      <Text variant="body14" isActive={isPressed}>
        {content}
      </Text>
    </>
  );
};
