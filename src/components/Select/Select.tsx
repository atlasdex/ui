import styled from "styled-components";
import { SelectBoxProps, StyledSelectProps } from './type';

const StyleSelect = styled.select<StyledSelectProps>`
    font-size : ${(props) => props.fontSize ? `${props.theme.fonts[props.fontSize]}px` : `${props.theme.fonts['fontSize15']}px`};
    font-weight : ${(props) => props.weight ? `${props.theme.fonts[props.weight]}px` : '400'};
    color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
    border:unset;
    background-color: inherit;
    option {
        background : ${(props) => props.theme.isDark ? props.theme.colors.backgroundDropdownDark : props.theme.colors.lightBackground};
    }
    &:focus {
        outline: none;
    }
    &.dark {
        background-color: inherit;
        border: unset;
        &:after {
            border-top-color: inherit;
        }
    }
`

const SelectBox: React.FC<SelectBoxProps> = (props) => {
    const { onChange, options, classes, size, weight } = props
    return (
        <StyleSelect onChange={onChange} className={classes + " dark"} fontSize={size} weight={weight}>
            {options?.map((option, index) => {
                return (
                    <option value={option?.value} key={index}> {option?.title}</option>
                )
            })}
        </StyleSelect>
    )
}
export default SelectBox

