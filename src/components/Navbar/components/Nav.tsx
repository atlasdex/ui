import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavigationTabArray from './../../../config/constants/navigationTab'
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    display: none;
    flex-direction: column;
    margin-right: 0px;
  }
`;

const StyledLink = styled(NavLink)`
  font-size :${(props) => props.theme.fonts['fontSize16']}px;
  font-weight : 400;
  color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-bottom: ${(props) => props.theme.spacing[1] + 1}px;
  margin : ${(props) => props.theme.spacing[2]}px ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
    text-decoration: none;
  }
  &.active {
    border-bottom: 2px solid ${(props) => props.theme.isDark ? props.theme.colors.navbarBorderColor : props.theme.colors.gray};
  }
  &.isDisabled {
    pointer-events: none !important;
  }
  &.yellow-color {
    color : ${(props)=> props.theme.isDark ? props.theme.colors.yellow : props.theme.colors.lavender} !important;
  }
  ${({ theme }) => theme.mediaQueries.maxWidthXS}{
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      {(NavigationTabArray).map((data, index) => (
        <StyledLink key={index}
          exact
          activeClassName="active"
          to={data.route}
          className = { data.disabled && data.diffColor ? 'isDisabled yellow-color' : data.disabled ? "isDisabled": data.diffColor && "yellow-color"}

        >
          {data.name}
        </StyledLink>
      ))}
    </StyledNav>
  );
};


export default Nav;
