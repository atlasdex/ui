import { ReactNode } from "react"
import styled from "styled-components"

interface TextPropsInterface {
    onClick?: () => void;
    color ?: string;
    size ?: number; 
    weight ?: number;
    text : ReactNode;
    classes ?: string
}
interface StyledTextInterface {
    color ?: string;
    size ?: number; 
    weight ?: number;
}

const StyledText = styled.div<StyledTextInterface>`
    color : ${(props)=> props.theme.isDark ? props.color : props.theme.colors.primary};
    font-size : ${(props)=> props.size ? `${props.size}px` : `${props.theme.fonts['fontSize15']}px` };
    font-weight :  ${(props)=> props.weight ? props.weight : `normal` };
`

const Text: React.FC<TextPropsInterface>= (props) => {
    const { onClick, color, size , weight, text , classes } = props    
    return (
      
        <StyledText
            onClick = {onClick}
            color = {color}
            size = {size}
            weight = {weight}
            className = {classes}
         >
            {text}
        </StyledText> 
           
    )
}
export default Text