import { styled, Typography } from "@shared/ui";
import { networkItems } from "widgets/network-items";
import { NetworkItem } from "../../atoms";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(1.5)}px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(1)}px;
  }
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: uppercase;
  font-weight: 300;
`;

export const SocialNetworkSlice = () => {
  return (
    <Wrapper>
      <Title variant="title">связь в социальных сетях</Title>
      <Container>
        {networkItems.map(({ iconName, id, url }) => (
          <NetworkItem iconName={iconName} key={id} url={url} id={id} />
        ))}
      </Container>
    </Wrapper>
  );
};
