import { styled } from "@shared/ui";
import { Event } from "effector";
import { useState } from "react";
import { TextArea } from "../../atoms";

const Container = styled.div`
  width: 98%;
`;

type TFeedBackFieldProps = {
  title: string;
  text: string;
  setText: Event<string>;
  isName: boolean;
  name: string;
};

export const FeedBackField = ({
  title,
  text,
  setText,
  isName,
  name,
}: TFeedBackFieldProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container className="feedback-input-field">
      <TextArea
        title={title}
        text={text}
        setText={setText}
        isActive={isActive}
        isName={isName}
        name={name}
      />
    </Container>
  );
};
