import { useWindowDimensions } from "@shared/hooks";
import { Separator, styled, Typography } from "@shared/ui";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-left: ${({ theme }) => theme.spacing(0)}px;
`;

const Button = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  font-weight: 400;
`;

type TIsActive = {
  isActive: boolean;
};

const duration = 200;

const Text = styled(Typography)<TIsActive>`
  color: ${({ theme }) => theme.palette.text.tertiary};
  width: 300px;
  text-align: justify;
  line-height: 22px;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

const DescContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(0)}px;
  &.desc-slice-exit-done {
    max-height: 0;
  }
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
  const { isNotDesktop } = useWindowDimensions();

  const handleClick = () => {
    setIsPressed((prev) => !prev);
  };

  return (
    <>
      <Container className="desc-slice">
        <Title variant="body16" className="title">
          {title}
        </Title>
        <Button variant="title" onClick={handleClick} className="title">
          {isPressed ? "-" : "+"}
        </Button>
      </Container>

      <CSSTransition
        in={isPressed}
        timeout={duration}
        classNames={"desc-slice"}
        unmountOnExit
      >
        <DescContainer>
          <Text variant="body14" isActive={isPressed} className="desc-content">
            {content}
          </Text>
        </DescContainer>
      </CSSTransition>

      <Separator width={isNotDesktop ? 100 : 65} />
    </>
  );
};
