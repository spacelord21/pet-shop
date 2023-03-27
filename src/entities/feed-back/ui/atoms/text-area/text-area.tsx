import { styled } from "@shared/ui";
import { Event } from "effector";

type TTextAreaProps = {
  text: string;
  setText: Event<string> | ((value: string) => void);
  title: string;
  isActive: boolean;
  isName: boolean;
  name: string;
};

const Area = styled.textarea<Pick<TTextAreaProps, "isActive" | "isName">>`
  width: 100%;
  height: ${({ theme }) => theme.spacing(2.2)}px;
  resize: none;
  border: 2px solid ${({ theme }) => theme.palette.accent.secondary};
  ${({ isName, theme }) =>
    !isName &&
    `
    &:focus {
    height:  ${theme.spacing(6)}px;
    transition: 0.2s ease-in-out;
    border: 0.5px solid ${theme.palette.accent.primary};
  }
  &:not(:focus) {
    height: ${theme.spacing(2.2)}px;
    transition: 0.2s ease-in-out;
  }
  `}
  border-radius: 10px;
  font-family: ${({ theme }) => theme.typography.body14.fontFamily};
  font-size: ${({ theme }) => theme.typography.body14.size};
  color: ${({ theme }) => theme.palette.text.tertiary};
  text-align: left;
  padding: 8px;
  overflow: hidden;
`;

export const TextArea = ({
  text,
  setText,
  title,
  isActive,
  isName,
  name,
}: TTextAreaProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Area
      isName={isName}
      value={text}
      onChange={handleChange}
      placeholder={title}
      isActive={isActive}
      name={name}
    />
  );
};
