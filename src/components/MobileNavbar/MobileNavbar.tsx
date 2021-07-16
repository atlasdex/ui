import React from 'react'
import styled, { keyframes } from 'styled-components'

import { NavLink } from 'react-router-dom'
import NavigationTabArray from './../../config/constants/navigationTab'
import Div from 'components/DivComponent';
import Image from 'components/Image'

import darkLogo from "assets/images/atlas-dark-logo.svg";
import lightLogo from "assets/images/atlas-light-logo.svg";

import useTheme from 'hooks/useTheme';
import FooterLinks from "config/constants/footerLink";

interface MobileMenuProps {
  onDismiss: () => void
  visible?: boolean
}

const MobileNavbar: React.FC<MobileMenuProps> = ({ onDismiss, visible }) => {
  const { theme } = useTheme();
  const { colors, isDark } = theme;
  
  if (visible) {
    return (
      <StyledMobileMenuWrapper>
        <StyledBackdrop onClick={onDismiss} />

        <StyledMobileMenu>
          <Div classes = "d-flex justify-content-between px-3 py-4">
            <Image src={isDark ? darkLogo : lightLogo} width={'100px'} />
            <svg width= "15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" onClick={onDismiss}>
              <path stroke = {isDark ? colors.white : colors.primary} fill={isDark ? colors.white : colors.primary} d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
              </path>
            </svg>
          </Div>
          {(NavigationTabArray).map((data, index) => (
            <StyledLink exact activeClassName="active" to={data.route} onClick={onDismiss} key={index}
             className={ data.disabled && data.diffColor ? 'isDisabled yellow-color' : data.disabled ? "isDisabled": data.diffColor && "yellow-color"}>
              {data.name}
            </StyledLink>

          ))}
          <Div classes= "row m-0 mt-5">
              
              {(FooterLinks).map((data, index) => (
                <Div classes = "col-6 p-0">
            <StyledLink exact activeClassName="active" to={data.link} onClick={onDismiss} key={index} className={'isDisabled footer-in-header'}>
              {data.name}
            </StyledLink>
            </Div>
          ))}
            
          </Div>
           
        </StyledMobileMenu>
        
      </StyledMobileMenuWrapper>
    )
  }
  return null
}

const StyledBackdrop = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const StyledMobileMenuWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const slideIn = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-100%);
  }
`

const StyledMobileMenu = styled.div`
  animation: ${slideIn} 0.3s forwards ease-out;
  background: ${(props) => props.theme.isDark ? props.theme.gradients.blue : props.theme.colors.background};
  box-shadow : ${(props) => props.theme.shadows.level2};
  display: flex;
  flex: 1;
  flex-direction: column;
  // justify-content: center;
  position: relative;
  top: 0;
  left: 100%;
  bottom: 0;
  width: 85vw;
  height: 100%;
  max-width: 340px;
  overflow-y: scroll;
`

const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
  font-size: 20px;
  font-weight: 400;
  padding: 10px
    ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
  &.isDisabled {
    pointer-events: none !important;
  }
  &:hover {
    color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
    text-decoration: none;
  }
  &.yellow-color {
    color : ${(props)=> props.theme.isDark ? props.theme.colors.yellow : props.theme.colors.lavender} !important;
  }
  &.footer-in-header {
    font-size : 10px;
  }
`

export default MobileNavbar
