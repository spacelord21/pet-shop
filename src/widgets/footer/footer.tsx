import { styled } from "@shared/ui";
import { ContactsSlice, NavSlice, SocialNetworkSlice } from "./ui";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 300px;
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
