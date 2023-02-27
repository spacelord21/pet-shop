import { SizeControl } from "@entities/bucket/ui/molecules/size-control";
import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
  width: 200px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

const Wrapper = styled.div`
  /* margin-left: ${({ theme }) => theme.spacing(1)}px; */
`;

type TProductBodyProps = {
  title: string;
  size: number;
  price: number;
  id: number;
};

export const ProductBody = ({ title, size, price, id }: TProductBodyProps) => {
  return (
    <Container>
      <Title variant="body16">{title}</Title>
      <Price variant="body16">{price}.00₽</Price>
      <Wrapper>
        <SizeControl id={id} size={size} />
      </Wrapper>
    </Container>
  );
};
