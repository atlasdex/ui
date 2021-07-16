import styled from "styled-components";

const StyledDiv = styled.div``;

interface DivPropsInterface {
    onClick?: () => void;
    classes?: string
}
const Div: React.FC<DivPropsInterface> = ({children, ...props}) => {
    const { classes, onClick } = props
    return (
        <StyledDiv
            className={classes }
            onClick = {onClick}    
        >
            {children}
        </StyledDiv>
    )
}

export default Div;