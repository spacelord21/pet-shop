import { styled } from "@shared/ui";
import { useEffect, useRef } from "react";
import { ContactsSlice, Icon, NavSlice, SocialNetworkSlice } from "./ui";

const Container = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobileS} {
    flex-direction: column;
    height: auto;
    /* align-items: center; */
  }
  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: row;
    align-items: center;
    height: 400px;
    justify-content: space-between;
  }
  /* align-items: baseline; */
  background-color: ${({ theme }) => theme.palette.background.dark};
  width: 100%;
  z-index: 20;
  border-top: 1px solid black;
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
