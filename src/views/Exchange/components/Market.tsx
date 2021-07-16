import styled from "styled-components"
import Div from "components/DivComponent";
import Text from "components/Text";
import GradientLayout from "components/layout/GradientLayout";

import Input from 'components/Input';
import Image from 'components/Image';
import ConvertedIcon from 'assets/images/converted-icon.svg';
import LowGasIcon from 'assets/images/low-gas-icon.svg';
import SelectedMaxGasIcon from 'assets/images/Selected-Max-Gas-Icon.svg';
import SolanaIcon from 'assets/images/Solana-Icon.svg';
import RayIcon from 'assets/images/R-Icon.svg';
import {ButtonSeeGreen} from "components/Button";
import WhiteWalletIcon from "assets/images/White-Wallet-Icon.svg";
import useTheme from "hooks/useTheme";
import { useGetWalletState } from "state/hooks";
import { useModalState } from 'state/hooks';
import { useState } from "react";
import CustomDropdown from 'components/Dropdown';

const StyledMarketingSection = styled.section`
    padding : 26px 34px;
    .payment-row {
        .pay-div-parent, .receive-div-parent {
            width : 45%;
        }
        .convert-icon-div {
            width : 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top : 30px;
            img {
                cursor: pointer;
            }
        }
    }
    .pay-card {
        &.borderClass {
            border: 0.663462px solid ${(props)=> props.theme.isDark ? "rgba(196, 196, 196, 0.5)" :props.theme.colors.gray};
        }
        &.backgroundClass {
            background: ${(props)=> props.theme.isDark ? "rgba(196, 196, 196, 0.5)" : props.theme.gradients.multiColor3};
        }
        box-sizing: border-box;
        border-radius: 13.2692px;
        padding: 1px;
        .inner-pay-card {
            padding: 14px 22px;
            border-radius: 12.2692px;
            background: ${(props)=> props.theme.isDark ? props.theme.gradients.marketCard : props.theme.gradients.whiteGrayGradient };
        }
        .pay-card-heading {
            margin-bottom : 10px;
        }
        input {
            text-align:end;
        }
    }
    .payment-data {
        /* border: 1.99px solid ${(props)=> !props.theme.isDark && props.theme.colors.gray}; */
        background: ${(props)=> props.theme.isDark ? props.theme.gradients.multiColor2 : props.theme.gradients.buttonBorderDark };
        border-radius: 13.2692px;
        padding: 1px;
        .inner-payment-data {
            padding : 30px 20px;
            background: ${(props)=> props.theme.isDark ? props.theme.gradients.blue : props.theme.gradients.garyWhiteGradinet };
            border-radius: 12.2692px;
        }
        .text1 {
            color : ${(props)=> props.theme.colors.purple };
        }
        .text-success {
            color : ${(props)=> props.theme.colors.success };
        }
        .vertical-line {
            background: ${(props)=>  props.theme.gradients.verticalLine};
            width : 2px;
            opacity :0.1;
            margin : 15px 50px;
        }
        .connent-wallet-btn-row {
            width: 243.77px;
        }
    }
    .cost-row {
        .max-cost , .low-cost{
            border-radius: 10.2692px;
            padding: 8px 30px;
            cursor: pointer;
        }
        .active {
            background: ${(props)=> props.theme.isDark ? props.theme.colors.plumb : props.theme.colors.lightFailure };
            color : ${(props)=>props.theme.colors.white} !important;
        }
    }

    @media screen and (max-width: 834px) and (min-width: 768px) {
        .payment-data {
            .vertical-line {
                display :none !important;
            }
            .rate-row, .estimate-row ,.save-row { 
                width : 100% ; 
                margin-bottom : 1.5rem
            }
          
        }
    }
    ${(props) => props.theme.mediaQueries.maxWidthMD} {
        padding : 26px 20px;

        .payment-row {
            .pay-div-parent, .receive-div-parent, .convert-icon-div {
                width : 100%;
            }
            .convert-icon-div {
                transform: rotateZ(90deg);
            }
    
        }
        .cost-row {
            .cost-row-inner {
                display : block ;
            }
            .max-cost , .low-cost{
                border-radius: 13.2692px;
                padding: 8px 15px;
                cursor: pointer;
                width: 100% !important;
            }
            
        }
        .payment-data {
            .vertical-line {
                display :none !important;
            }
            .rate-row, .estimate-row ,.save-row { 
                width : 100% ; 
                margin-bottom : 1.5rem
            }
          
        }
    }

    @media screen and (max-width: 1520px) and (min-width: 1200px) {
        .custom-width {
            flex: 1 0 50% !important;
            max-width: 67% !important;
        
        }
        .vertical-line {
            margin : 15px 20px !important;
        }
    }
    @media screen and (max-width: 1199px) and (min-width: 920px) {
        .custom-width {
            flex: 1 0 50% !important;
            max-width: 82% !important;
        
        }
        .payment-data {
            .vertical-line {
                display :none !important;
            }
            .rate-row, .estimate-row { 
                width : 50% ; 
            }
          
        }
    }
    @media screen and (max-width: 919px) and (min-width: 500px) {
        .custom-width {
            flex: 1 0 50% !important;
            max-width: 100% !important;
        
        }
    }
    ${(props) => props.theme.mediaQueries.maxWidthSM} {
        .payment-data {
            .rate-row, .estimate-row {
                .d-flex {
                    div {
                        font-size : ${(props)=>props.theme.fonts.fontSize15}px;
                    }
                }
            }
            .connent-wallet-btn-row {
                .btn-gradient-round {
                    width : fit-content !important;
                    span {
                        font-size : ${(props)=>props.theme.fonts.fontSize13}px;
                    }
                    img {
                        width : 30px !important;
                        height : 30px !important; 
                        margin-right : 10px !important;
                    }
                }
            }
        }
        .max-low-gas-text {
            font-size : ${(props)=>props.theme.fonts.fontSize13}px;
        }
        .max-cost, .low-cost {
            img {
                width : 30px !important;
                height : 30px !important; 
                margin-right : 10px !important;
            }
        }
    }


`;

const option = [{
    value  : '',
    title : 'SOL',
    icon : SolanaIcon
},
{
    value  : '',
    title : 'RAY',
    icon : RayIcon
}
]
export const Market: React.FC = () => {
    const { theme } = useTheme();
    const { colors, fonts, gradients, isDark } = theme;
    const { setWalletModalState} = useModalState();
    const walletState = useGetWalletState();
    const [lowGas , setLowGas] = useState(false)

    return (
        <StyledMarketingSection className="">
            <Div classes={'row mx-0 payment-row mb-4'}>
                <Div classes={"pay-div-parent"}>
                    <Text text="You Pay" color={colors.white} size={fonts.fontSize18} weight={600} classes = {'mb-2'}></Text>
                    <Div classes= {isDark ? `pay-card borderClass` : `pay-card backgroundClass`}>
                        <Div classes = "inner-pay-card">
                            <Div classes = {'d-flex justify-content-between pay-card-heading'}>
                                <Text text = {"Solana"} size ={fonts.fontSize18} weight ={500} color ={colors.white}/>
                                <Text text = {"=$37.02"} size ={fonts.fontSize18} weight ={500} color ={colors.white}/>
                            </Div>

                            <Div classes = {'d-flex justify-content-between'}>
                                <CustomDropdown color ={isDark ? colors.white : colors.primary} weight ={400} options ={option}/>
                                <Input placeholder = {'0.0'} size ={fonts.fontSize20} weight ={400} />

                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div classes={"convert-icon-div"}>
                    <Image src = {ConvertedIcon}  width = "40px"/>
                </Div>
                <Div classes={"receive-div-parent"}>
                    <Text text="You Receive" color={colors.white} size={fonts.fontSize18} weight={600} classes = {'mb-2'}></Text>
                    <Div classes= {isDark ? `pay-card borderClass` : `pay-card backgroundClass`}>
                        <Div classes = "inner-pay-card">
                            <Div classes = {'d-flex justify-content-between pay-card-heading'}>
                                <Text text = {"Solana"} size ={fonts.fontSize18} weight ={500} color ={colors.white}/>
                                <Text text = {"=$37.02"} size ={fonts.fontSize18} weight ={500} color ={colors.white}/>
                            </Div>

                            <Div classes = {'d-flex justify-content-between'}>
                                <CustomDropdown color ={isDark ? colors.white : colors.primary} weight ={400} options ={option}/>
                                <Input placeholder = {'0.0'} size ={fonts.fontSize20} weight ={400} />

                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>

            <Div classes = "row  mx-0 payment-data mb-4">
                <Div classes= "inner-payment-data w-100">
                    <Div classes = {"row m-0 justify-content-center"}>
                        <Div classes = {'rate-row'}>
                            <Div classes = {'mb-4'}>
                                <Text text = {'Rate'} size = {fonts.fontSize18} color = {colors.white} weight ={500}/>
                                <Div classes = "d-flex">
                                    <Text text = {'1 SOL = '} size = {fonts.fontSize24} weight ={500} classes = "text1"/>
                                    <Text text = {'3.6533137'} size = {fonts.fontSize24} color = {colors.white} weight ={500} classes = "px-2"/>
                                    <Text text = {'RAY'} size = {fonts.fontSize24} color = {colors.gray} weight ={500}/>
                                </Div>
                                
                            </Div>
                            <Div >
                                <Text text = {'Inverse Rate'} size = {fonts.fontSize18} color = {colors.white} weight ={500}/>
                                <Div classes = "d-flex">
                                    <Text text = {'1 RAY = '} size = {fonts.fontSize24} weight ={500} classes = "text1"/>
                                    <Text text = {'3.6533137'} size = {fonts.fontSize24} color = {colors.white} weight ={500} classes = "px-2"/>
                                    <Text text = {'SOL'} size = {fonts.fontSize24} classes = {'text1'} weight ={500}/>
                                </Div>
                            </Div>
                        </Div>
                        <Div classes = {'vertical-line d-none d-md-block'}>
                        </Div>
                        <Div classes = {'estimate-row'}>
                            <Div classes = {'mb-4'}>
                                <Text text = {'USD Price'} size = {fonts.fontSize18} color = {colors.white} weight ={500}/>
                                <Div classes = "d-flex">
                                    <Text text = {'1 SOL = '} size = {fonts.fontSize24} weight ={500} classes = "text1"/>
                                    <Text text = {'$3.6533137'} size = {fonts.fontSize24} color = {colors.white} weight ={500} classes = "px-2"/>
                                </Div>
                                
                            </Div>
                            <Div >
                                <Text text = {'Estimated Fee'} size = {fonts.fontSize18} color = {colors.white} weight ={500}/>
                                <Div classes = "d-flex">
                                    <Text text = {'≈ $2.5'} size = {fonts.fontSize24} color = {colors.white} weight ={500} classes = "px-2"/>
                                </Div>
                            </Div>
                        </Div>
                        <Div classes = {'vertical-line d-none d-md-block'}>
                        </Div>
                        <Div classes = {'save-row'}>
                            <Div classes = {'mb-4'}>
                                <Text text = {'You Save'} size = {fonts.fontSize18} color = {colors.white} weight ={500}/>
                                <Div classes = "d-flex">
                                    <Text text = {'≈ $10.5 '} size = {fonts.fontSize24} weight ={500} classes = "text-success"/>
                                </Div>
                                
                            </Div>
                            <Div classes = "connent-wallet-btn-row">
                                {
                                    !walletState.connected && 
                                    <Div classes = "">
                                        <ButtonSeeGreen icon = {<Image src = {WhiteWalletIcon} width ={"43.46px"} height ={"43.46px"}  classes="mr-3" />} title ={'Connect Wallet'} size = {fonts.fontSize18} classes = {"py-1 px-2"} onClick = {()=>{setWalletModalState()}}></ButtonSeeGreen>
                                    </Div>
                                }
                                
                            </Div>
                        </Div>

                    </Div>
                </Div>
            </Div>
        
            <Div classes = {"row mx-0 justify-content-center cost-row"}>
                <Div classes = "col-12 col-md-10 col-lg-11 col-xl-6 custom-width">
                    <GradientLayout broderGradient = {gradients.buttonBorderLight} backgroundGradient ={gradients.blue}>
                       <Div classes = "cost-row-inner d-block d-md-flex">
                            <Div classes = { lowGas ? 'd-flex align-items-center w-50 max-cost' : 'd-flex align-items-center w-50 max-cost active' } onClick  ={()=>setLowGas(false)}>
                                <Image src ={SelectedMaxGasIcon} width = "36px" classes= {'mr-3'}/>
                                <Text text = {'Maximum return'} color = {colors.white} size = {fonts.fontSize18} weight = {400} classes ={'max-low-gas-text'}/>
                            </Div>
                            <Div classes = {lowGas ? 'd-flex align-items-center w-50 low-cost active' : 'd-flex align-items-center w-50 low-cost'}  onClick  ={()=>setLowGas(true)}>
                                <Image src ={LowGasIcon} width = "36px"  classes= {'mr-3'}/>
                                <Text text = {'Lowest gas cost'} color = {colors.white} size = {fonts.fontSize18} weight = {400} classes ={'max-low-gas-text'}/>
                            </Div>
                       </Div>

                    </GradientLayout>
                </Div>
            </Div>
        </StyledMarketingSection>
    )
}

