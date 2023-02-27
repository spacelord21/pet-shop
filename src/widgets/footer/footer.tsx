import { styled } from "@shared/ui";
import { ContactsSlice, NavSlice, SocialNetworkSlice } from "./ui";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  height: 230px;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const Footer = () => {
  return (
    <Container>
      <NavSlice />
      <ContactsSlice />
      <SocialNetworkSlice />
    </Container>
  );
};
