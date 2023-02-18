import { styled } from "@shared/ui";

type TTextAreaProps = {
  text: string;
  setText: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  isActive: boolean;
  isName: boolean;
  name: string;
};

const Area = styled.textarea<Pick<TTextAreaProps, "isActive" | "isName">>`
  width: 558px;
  height: ${({ theme }) => theme.spacing(2.2)}px;
  resize: none;
  border: 0.5px solid ${({ theme }) => theme.palette.accent.secondary};
  ${({ isName, theme }) =>
    !isName &&
    `
    &:focus {
    height:  ${theme.spacing(6)}px;
    transition: 0.5s ease-in-out;
    border: 0.5px solid ${theme.palette.accent.primary};
  }
  &:not(:focus) {
    height: ${theme.spacing(2.2)}px;
    transition: 0.5s ease-in-out;
  }
  `}

  font-family: ${({ theme }) => theme.typography.body14.fontFamily};
  font-size: ${({ theme }) => theme.typography.body14.size};
  color: ${({ theme }) => theme.palette.text.tertiary};
  text-align: left;
  padding: 8px;
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
    setText(event);
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
