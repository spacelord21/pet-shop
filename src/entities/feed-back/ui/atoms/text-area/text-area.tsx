import { Event } from "effector";
import React from "react";
import "./style.css";
import { Container, Area, Label } from "./styles";

export type TTextAreaProps = {
  text: string;
  setText: Event<string> | ((value: string) => void);
  title: string;
  isActive: boolean;
  isName: boolean;
  name: string;
};

export const TextArea = ({
  text,
  setText,
  title,
  isActive,
  isName,
  name,
}: TTextAreaProps) => {
  const areaRef = React.useRef<HTMLTextAreaElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClick = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (areaRef.current) {
      areaRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Container className="group">
      <Area
        ref={areaRef}
        onFocus={handleClick}
        className="text-input"
        isName={isName}
        id={name}
        value={text}
        onChange={handleChange}
        placeholder={title}
        isActive={isActive}
        name={name}
      />
      <Label className="label" htmlFor={name}>
        {title}
      </Label>
    </Container>
  );
};
