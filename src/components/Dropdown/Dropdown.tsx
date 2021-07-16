
import { Dropdown } from "react-bootstrap";
import Text from 'components/Text';
import Image from 'components/Image';
import styled from "styled-components";
import { DropdownBoxProps } from "./type";
import { useState } from "react";


const StyleDropDown = styled(Dropdown)`
    #dropdown-basic::after {
        display : none !important
    }
    .dropdown-menu {
        background : ${(props)=>props.theme.isDark ? props.theme.gradients.multiColor3 :  props.theme.colors.background};
        a{
            padding: .25rem .7rem;
            color : ${(props)=>props.theme.isDark ? props.theme.colors.white :  props.theme.colors.primary};
        }
    }
    .dropdown-item:hover {
        color : black
    }
    .dropdown-text {
        width: 100px;
        text-align: left;
    }
    ${(props) => props.theme.mediaQueries.maxWidthSM} {
        .dropdown-text {
            width: 70px;
            text-align: left;
        }
    }
`
const CustomDropdown: React.FC<DropdownBoxProps> = (props) => {
    const { size, weight, color, options } = props;
    const [token, selectToken] = useState <any> (options && options[0])
    return (
        <StyleDropDown >
            <Dropdown className="pr-3">
                <Dropdown.Toggle
                    variant=""
                    className="dropdown-tokens d-flex align-items-center border-0 shadow-none p-0"
                    id="dropdown-basic"
                >
                    {token && 
                        <Image
                            src={token?.icon}
                            classes="mr-2"
                            width="37"
                            height="37"
                        />
                    }
                    <Text text={token?.title} color={color} weight ={weight} size = {size} classes = "dropdown-text" />
                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.30322 0.872559L6.02745 4.65194L10.7517 0.872559" stroke={color} strokeWidth="1.32692" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {options &&
                     options.map((option: any , index) => (
                        <Dropdown.Item  onClick={() => selectToken(option)} key = {index}>
                            <div className="d-flex align-items-center">
                                <Image
                                    src={option?.icon}
                                    classes="mr-2"
                                    width="37"
                                    height="37"
                                />
                                {option.title}
                            </div>
                        </Dropdown.Item>
                     ))}
                </Dropdown.Menu>
            </Dropdown>
        </StyleDropDown>

    )
}

export default CustomDropdown;