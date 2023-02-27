import { Separator, styled, Typography } from "@shared/ui";
import { useState } from "react";
import { keyframes } from "styled-components";

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
`;

type TIsActive = {
  isActive: boolean;
};

const openAnimation = keyframes`
 from {
  transform: translateY(-10px);
  transition: all .5s ease-in-out;

 }
 to {
  transform: translateY(0px);
  transition: all .5s ease-in-out;
 }
 `;

const closeAnimation = keyframes`
  from {
    transform: translateY(0px);
    transition: all .5s ease-in-out;
  }
  to {
    transform: translateY(-10px);
    transition: all .5s ease-in-out;
  }
`;

const Text = styled(Typography)<TIsActive>`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-top: ${({ theme }) => theme.spacing(0)}px;
  height: ${({ isActive }) => (isActive ? "auto" : 0)};
  overflow: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  animation-name: ${({ isActive }) =>
    isActive ? openAnimation : closeAnimation};
  animation-duration: 0.8s;
  width: 300px;
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
        <Title variant="body16" onClick={handleClick}>
          {isPressed ? "-" : "+"}
        </Title>
      </Container>
      <Separator />
      <Text variant="body14" isActive={isPressed}>
        {content}
      </Text>
    </>
  );
};
