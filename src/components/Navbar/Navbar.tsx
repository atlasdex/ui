import React from "react";
import "style/home.style.css";
import styled from "styled-components";
import darkLogo from "assets/images/atlas-dark-logo.svg";
import MobileHeaderIcon from "assets/images/vector3.png";
import Nav from "./components/Nav";
import lightLogo from "assets/images/atlas-light-logo.svg";
import useTheme from "hooks/useTheme";

interface NavbarProps {
  onPresentMobileMenu: () => void;
}

const MainNavbar = styled.div``;

const MainNavbarInner = styled.div`
${({ theme }) => theme.mediaQueries.maxWidthMD} {
    display: flex;
    justify-content: space-between;
  }
`;

const MainNavbarLogo = styled.div`
  width : 100%;
  text-align : center;
  padding : 1rem 0;
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    width: auto;
    text-align : left;
    img {
      width : 100px;
    }
  }
`;

const NavbarLinks = styled.div`
`
const MobileNavbarIcon = styled.div`
  display: none;
  padding-top: 8px;
  pointer: cursor;
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    display: block;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ onPresentMobileMenu }) => {
  const { theme } = useTheme();
  const { isDark } = theme;
  return (
    <MainNavbar>
      <MainNavbarInner>
        <MainNavbarLogo>
          <img src={isDark ? darkLogo : lightLogo} className="logo" alt ={''} />
        </MainNavbarLogo>
        <NavbarLinks>
          <Nav />
        </NavbarLinks>
        <MobileNavbarIcon onClick={onPresentMobileMenu}>
          <img src={MobileHeaderIcon} height="40" width="40" alt ={''} />
        </MobileNavbarIcon>
      </MainNavbarInner>
    </MainNavbar>
  );
};


export default Navbar;
