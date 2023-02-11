import { styled, Typography } from "@shared/ui";
import { networkItems } from "widgets/network-items";
import { NetworkItem } from "../../atoms";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: -${({ theme }) => theme.spacing(3)}px;
`;

export const SocialNetworkSlice = () => {
  return (
    <Wrapper>
      <Title variant="title">СВЯЗЬ В СОЦИАЛЬНЫХ СЕТЯХ</Title>
      <Container>
        {networkItems.map(({ iconName, id, url }) => (
          <NetworkItem iconName={iconName} key={id} url={url} />
        ))}
      </Container>
    </Wrapper>
  );
};
