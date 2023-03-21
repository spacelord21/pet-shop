import { styled } from "@shared/ui";
import { useEffect, useRef } from "react";
import { ContactsSlice, NavSlice, SocialNetworkSlice } from "./ui";

const Container = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobileS} {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: row;
    align-items: baseline;
    height: 230px;
    justify-content: space-between;
  }
  align-items: baseline;
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 100%;
`;

export const Footer = () => {
  return (
    <Container className="footer-comp">
      <NavSlice />
      <ContactsSlice />
      <SocialNetworkSlice />
    </Container>
  );
};
