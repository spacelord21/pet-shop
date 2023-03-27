import { removeAllProductsFromBucketById } from "@entities/bucket/model/store";
import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";

const IconWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-left: ${({ theme }) => theme.spacing(0.7)}px;
  color: ${({ theme }) => theme.palette.accent.primary};
  cursor: pointer;
`;

type TRemoveAllButtonProps = {
  id: number;
};

export const RemoveAllButton = ({ id }: TRemoveAllButtonProps) => {
  return (
    <IconWrapper
      onClick={() => removeAllProductsFromBucketById(id)}
      className="remove-all-button"
    >
      <Icon icon="material-symbols:close-sharp" width={25} height={25} />
    </IconWrapper>
  );
};
