import { styled } from "@shared/ui";

type TSeparatorProps = {
  width?: number;
};

const Line = styled.div<TSeparatorProps>`
  width: ${({ width }) => width ?? 94}%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.palette.accent.primary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-left: 3%;
`;

export const Separator = ({ width }: TSeparatorProps) => {
  return <Line width={width} />;
};
