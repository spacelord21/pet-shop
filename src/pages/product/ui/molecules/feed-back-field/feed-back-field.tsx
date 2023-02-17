import { styled } from "@shared/ui";
import { useState } from "react";
import { TextArea } from "../../atoms";

const Container = styled.div``;

type TFeedBackFieldProps = {
  title: string;
  text: string;
  setText: (value: string) => void;
  isName: boolean;
};

export const FeedBackField = ({
  title,
  text,
  setText,
  isName,
}: TFeedBackFieldProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <TextArea
        title={title}
        text={text}
        setText={setText}
        isActive={isActive}
        isName={isName}
      />
    </Container>
  );
};
