import { styled, Typography } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
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
    feedbacksLength === 0 ? (
      <Text variant="body16">Отзывов еще нет</Text>
    ) : feedbacksLength === 1 ? null : (
      <Text variant="body16" onClick={handleClick}>
        Скрыть отзывы
      </Text>
    )
  ) : (
    <Text variant="body16" onClick={handleClick}>
      Показать еще {quantity} отзыва(ов)
    </Text>
  );
};
