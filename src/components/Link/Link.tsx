import styled from "styled-components"

interface LinkProps {
    children?: React.ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    text?: string | React.ReactNode;
    targetBlank?: boolean
    classes?: string;
    size ?:string;
    weight ?: number;
}
interface StyledLinkProps {
    boxShadow?: string;
    color?: string;
    disabled?: boolean;
    padding?: number;
    size ?:string;
    weight ?: number;
    classes ?: string;
}
const StyledLink = styled.a<StyledLinkProps>`
    cursor: pointer;
    font-size : ${(props) => props.size ? `${ props.theme.fonts[props.size ]}px` : `${ props.theme.fonts['fontSize13']}px`};
    font-weight : ${(props) => props.weight ? `${ props.theme.fonts[props.weight ]}px` : '400'};
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
        border-bottom: 2px solid ${(props) => props.theme.isDark ? props.theme.colors.lavender : props.theme.colors.lavender};
    }
    &.isDisabled {
        pointer-events: none !important;
    }
    ${({ theme }) => theme.mediaQueries.maxWidthXS}{
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
    }
    ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    margin-top: 10px;
    margin-bottom: 10px;
    }
`


const Link: React.FC<LinkProps> = (props) => {
    const { targetBlank, href, text , onClick, weight, size, classes} = props
    return (
        <StyledLink
            href={href}
            target={targetBlank && '_blank'}
            onClick = {onClick}
            weight = {weight}
            size = {size}
            className = {classes}
        >
            {text}
        </StyledLink>
    )
}
export default Link