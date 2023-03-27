import { useWindowDimensions } from "@shared/hooks";
import { Separator, styled, Typography } from "@shared/ui";
import { useState, useRef } from "react";
import { keyframes } from "styled-components";

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-left: ${({ theme }) => theme.spacing(0)}px;
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
  width: 300px;
  height: ${({ isActive }) => (isActive ? "auto" : 0)};
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  text-align: justify;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  z-index: ${({ isActive }) => (isActive ? 1000 : -1000)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  &:hover {
    opacity: 0.7;
  }
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
  const itemRef = useRef<HTMLDivElement>(null);
  const { isNotDesktop } = useWindowDimensions();

  const handleClick = () => {
    setIsPressed((prev) => !prev);
    if (!isPressed && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <Container>
        <Title variant="body16">{title}</Title>
        <Button variant="title" onClick={handleClick}>
          {isPressed ? "-" : "+"}
        </Button>
      </Container>
      <Separator width={isNotDesktop ? 100 : 65} />
      <Text variant="body14" isActive={isPressed} ref={itemRef}>
        {content}
      </Text>
    </>
  );
};
