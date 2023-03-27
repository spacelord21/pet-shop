import { removeAllProductsFromBucketById } from "@entities/bucket/model/store";
import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";
import { useTheme } from "styled-components";

const IconWrapper = styled.div`
  margin-left: 70px;
`;

type TRemoveButtonProps = {
  id: number;
};

export const RemoveButton = ({ id }: TRemoveButtonProps) => {
  const theme = useTheme();
  return (
    <IconWrapper onClick={() => removeAllProductsFromBucketById(id)}>
      <Icon
        icon="material-symbols:close-sharp"
        width={25}
        height={25}
        color={theme.palette.accent.primary}
      />
    </IconWrapper>
  );
};
