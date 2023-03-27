import { styled, Typography } from "@shared/ui";
import { useEffect } from "react";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  border-bottom: ${({ theme }) => theme.palette.accent.primary} 1px solid;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

type TShowMoreButtonProps = {
  quantity: number;
  feedbacksLength: number;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const ShowMoreButton = ({
  quantity,
  feedbacksLength,
  handleClick,
}: TShowMoreButtonProps) => {
  return quantity === 0 || quantity < 0 ? (
    feedbacksLength === 0 || quantity < 0 ? (
      <Text variant="body14">Отзывов еще нет</Text>
    ) : (
      <Text variant="body14" onClick={handleClick}>
        Скрыть отзывы
      </Text>
    )
  ) : (
    <Text variant="body14" onClick={handleClick}>
      Показать еще {quantity} отзыва(ов)
    </Text>
  );
};
