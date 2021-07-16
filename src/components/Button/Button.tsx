import React, { ReactNode } from "react";
import styled from "styled-components";
interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  title?: string | ReactNode;
  classes?: string;
  btnClasses?: string;
  icon?: ReactNode;
  size?: number;
  weight?: number;
  width?: string;
  height?: string;
  outerRadius?: string;
  innerRadius?: string;
  innerWidth ?: string;
  innerHeight ?: string;
}

const Button: React.FC<ButtonProps> = ({
  classes,
  disabled,
  onClick,
  title,
  icon, size, weight, width, height, btnClasses, innerRadius, outerRadius, innerHeight, innerWidth
}) => {

  return (

    <StyledButton className={`w-100  btn-gradient-round btn-gradient-wrapper btn ${btnClasses}`}
      onClick={onClick} disabled={disabled}
      size={size} weight={weight} width={width} height={height}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      innerHeight = {innerHeight ? innerHeight : height}
      innerWidth = {innerWidth ? innerWidth : width}
    >
      <span className={`btn-bg-gradient ${classes}`}> {icon ? icon : ''} {title}</span>
    </StyledButton>

  );
};

const StyledButton = styled.button<ButtonProps>`
&:focus {
  outline: 0 !important;
  border: none !important;
}
&.btn-gradient-round {
  color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
  border-radius: ${(props) => props.outerRadius ? props.outerRadius : "13.2692px"};
  box-sizing: border-box;
  display: block;
  border: none;
  letter-spacing: 1px;
  padding: 2px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  font-family: "Montserrat", sans-serif;
  background-image:  ${(props) => props.theme.isDark ? props.theme.gradients.buttonBorderDark : props.theme.gradients.buttonBorderLight};
  height:  ${(props) => props.height ? props.height : "100%"} !important;
  width: ${(props) => props.width ? props.width : "100%"} !important;
}
&.btn-gradient-round span {
  align-items: center;
  border-radius: ${(props) => props.innerRadius ? props.innerRadius : "11.2692px"};
  display: flex;
  // justify-content: center;
  height:  ${(props) => props.innerHeight ? props.innerHeight : "100%"} !important;;
  width: ${(props) => props.innerWidth ? props.innerWidth : "100%"} !important;
  transition: background 0.5s ease;
  box-shadow : ${(props) => props.theme.shadows.level2};
  font-size : ${(props) => props.size ? `${props.size}px` : `${props.theme.fonts['fontSize15']}px`};
  font-weight :  ${(props) => props.weight ? props.weight : `normal`}
}
.btn-bg-gradient {
  background:  ${(props) => props.theme.isDark ? props.theme.gradients.buttonDark : props.theme.gradients.buttonLight};
}
`;

export default Button;


export const ButtonSeeGreen: React.FC<ButtonProps> = ({
  classes,
  disabled,
  onClick,
  title,
  icon, size, weight, width, height, btnClasses, innerRadius, outerRadius
}) => {
  return (
    <StyledButtonSeeGreen className={`w-100  btn-gradient-round btn-gradient-wrapper btn ${btnClasses}`}
      onClick={onClick} disabled={disabled}
      size={size} weight={weight} width={width} height={height}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
    >
      <span className={`btn-bg-gradient ${classes}`}> {icon ? icon : ''} {title}</span>
    </StyledButtonSeeGreen>
  )
}


const StyledButtonSeeGreen = styled.button<ButtonProps>`
&.btn-gradient-round {
  color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
  border-radius: ${(props) => props.outerRadius ? props.outerRadius : "13.2692px"};
  box-sizing: border-box;
  display: block;
  border: none;
  letter-spacing: 1px;
  padding: 2px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  font-family: "Montserrat", sans-serif;
  background-image: ${(props) => props.theme.isDark ? " linear-gradient(282.26deg, rgba(0, 255, 240, 0.3) -0.57%, rgba(0, 103, 97, 0.3) 98.98%)" : props.theme.gradients.buttonBorderLight};
  height:  ${(props) => props.height ? props.height : "100%"} !important;
  width: ${(props) => props.width ? props.width : "100%"} !important;
}
&.btn-gradient-round span {
  align-items: center;
  border-radius: ${(props) => props.innerRadius ? props.innerRadius : "11.2692px"};
  display: flex;
  // justify-content: center;
  height:  ${(props) => props.height ? props.height : "100%"} !important;;
  width: ${(props) => props.width ? props.width : "100%"} !important;
  transition: background 0.5s ease;
  box-shadow : ${(props) => props.theme.shadows.level2};
  font-size : ${(props) => props.size ? `${props.size}px` : `${props.theme.fonts['fontSize15']}px`};
  font-weight :  ${(props) => props.weight ? props.weight : `normal`}
}
.btn-bg-gradient {
  background: ${(props) => props.theme.isDark ? "rgba(0, 166, 156, 0.18)" : props.theme.gradients.buttonLight};
}
button:focus {outline:0 !important;}

`;