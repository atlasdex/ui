import styled from "styled-components"
import Div from "components/DivComponent"
interface GradientLayoutInterface {
    padding?: string;
    borderRadius?: string;
    broderGradient ? : string
    backgroundGradient ? : string;
}

const StyledGardientBorder = styled.div<GradientLayoutInterface>`
    padding: ${(props)=> props.padding ? props.padding : "2px"};
    background: ${(props) => props.theme.isDark ? props.theme.gradients.multiColor : props.theme.gradients.buttonBorderDark};
    border-radius: 10.7692px !important;
    border: none !important;
    .inner-gradient-div {
        background: ${(props) => props.theme.isDark ? props.theme.gradients.blue : props.theme.gradients.whiteGrayGradient};
        border-radius: ${(props)=> props.borderRadius ? props.borderRadius : "10.2px"}; 
    }
`;

const GradientLayout: React.FC<GradientLayoutInterface> = ({ children ,...props}) => {
    const { padding , borderRadius, broderGradient, backgroundGradient } = props;
    return (
        <StyledGardientBorder padding = {padding} borderRadius = {borderRadius}  broderGradient ={broderGradient} backgroundGradient={backgroundGradient}>
            <Div classes = "inner-gradient-div ">
                {children}
            </Div>
        </StyledGardientBorder>
    )
}
export default GradientLayout