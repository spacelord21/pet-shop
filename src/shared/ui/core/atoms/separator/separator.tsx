import { styled } from "@shared/ui";

const Line = styled.div`
  width: 94%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.palette.accent.primary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-left: 3%;
`;

export const Separator = () => {
  return <Line />;
};
