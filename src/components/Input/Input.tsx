import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
  icon?: React.ReactNode,
  value?: string,
  size? :number,
  weight?: number,
  classes ? : string
}

interface StyledInputProps {
  size? :number,
  weight?: number,
}

const Input: React.FC<InputProps> = ({
  icon,
  onChange,
  placeholder,
  value,size,
  classes,weight
}) => {
  return (
    <StyledInputWrapper>
      {!!icon && icon}
      <StyledInput placeholder={placeholder} value={value} onChange={onChange} className = {classes} size ={size} weight = {weight}  />
      {!!icon && icon}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  align-items: center;
  background-color: inherit;
  border-radius: 12px;

`

const StyledInput = styled.input<StyledInputProps>`
  background: inherit;
  border: 0;
  color: ${props =>  props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
  font-size : ${(props)=> props.size ? `${props.size}px` : `${props.theme.fonts['fontSize15']}px` };
  font-weight :  ${(props)=> props.weight ? props.weight : `normal` };
  flex: 1;
  margin: 0;
  padding: 0;
  outline: none;
  width :100%;
`

export default Input