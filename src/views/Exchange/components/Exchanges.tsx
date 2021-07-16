import styled from "styled-components";
import Div from 'components/DivComponent';
import AtlasIcon from 'assets/images/Atlas-Icon.svg';
import Image from 'components/Image';
import Text from 'components/Text';
import Select from 'components/Select';
import useTheme from "hooks/useTheme";


 const ExchangeDiv = styled.div`
    .row-padding { padding:13px 0 6.5px;}
    .header {
        color : ${(props) => props.theme.isDark ? props.theme.colors.gray : props.theme.colors.primary};
        font-size : ${(props) => props.theme.fonts['fontSize13']}px;
        font-weight : 500;
    }
    .content-row {
        img {
            width : 32px;
            height : 32px;
            margin-right: 15px;
        }
        .Dff-div {
            border-radius: 10px;
            width: 87.32px;
            height: 33.45px;
            color : white;
            font-size: ${(props)=>props.theme.fonts['fontSize16']}px;
            &.best {
               background: ${(props)=> props.theme.isDark ?  props.theme.gradients.blue : "#E08BFF"}
                
            }
            &.match {
                background:${(props)=> props.theme.isDark ?  "#008A82" : "#B0DBDA"} ;
            }
            &.less {
                background: ${(props)=> props.theme.isDark ?  "#641B1B" : "#C5B0B1"};
            }
        }
        
    }
    ${(props) => props.theme.mediaQueries.maxWidthLG} {
        .content-row {
            img {
                width : 40px;
                height : 40px;
                margin-right: 15px;
            }
            .Dff-div {
                width: 60.32px;
                font-size: ${(props)=>props.theme.fonts['fontSize13']}px;  
            }
        }
    }
    ${(props) => props.theme.mediaQueries.maxWidthMD} {
        .content-row {
            img {
                width : 32px;
                height : 32px;
                margin-right: 15px;
            }
            .Dff-div {
                width: 60.32px;
                font-size: ${(props)=>props.theme.fonts['fontSize13']}px;  
            }
           
        }
    }
    ${(props) => props.theme.mediaQueries.maxWidthSM} {
        .content-row {
            .Dff-div {
                width: 60.32px;
                font-size: ${(props)=>props.theme.fonts['fontSize13']}px;  
            }
        }
    }
`;
const ExhangeData = [
    {
        name: 'Atlas',
        icon: AtlasIcon,
        value: "3.4558424",
        type: "Best"
    },
    {
        name: 'Raydium',
        icon: AtlasIcon,
        value: "3.4558424",
        type: "Match"
    }, 
    {
        name: 'Soleon',
        icon: AtlasIcon,
        value: "3.4558424",
        type: "-0.01%"
    },
    {
        name: 'Atlas',
        icon: AtlasIcon,
        value: "3.4558424",
        type: "Best"
    },
    {
        name: 'Raydium',
        icon: AtlasIcon,
        value: "3.4558424",
        type: "Best"
    }, 
    {
        name: 'Soleon',
        icon: AtlasIcon,
        value: "3.4558424",
        type: "Best"
    },
    {
        name: 'Soleon',
        icon: AtlasIcon,
        value: "3.4558424",
        type: "Best"
    }
] 
const options = [
    {
        value : "SOL / RAY",
        title : "SOL / RAY"
    },
    {
        value : "RAY / SOL",
        title : "RAY / SOL"
    },
    {
        value : "SOLQ / RAY",
        title : "SOLQ / RAY"
    }
]
export const Exhanges: React.FC = () => {
    const { theme } = useTheme();
    const { colors, fonts } = theme;
    return (
        <>
            <ExchangeDiv className={'padding pt-2'}>
                <Div classes={'row header row-padding'}>
                    <Div classes={'col-xl-4 d-none d-xl-block '}>
                        Name
                    </Div>
                    <Div classes={'col-8 col-xl-5'}>
                        <Select options = {options} size ={'fontSize15'} weight = {500}/>
                    </Div>
                    <Div classes={'col-4 col-xl-3 text-center'}>
                        Diff
                    </Div>
                </Div>

                {
                    ExhangeData.map((data, index) => (
                        <Div classes={'row content-row row-padding'} key={index}>
                            <Div classes={'col-xl-4 d-none d-xl-flex align-items-center'}>
                                <Image src={data.icon} />
                                <Text text={data.name} color={colors.white} size={fonts.fontSize16} />
                            </Div>
                            <Div classes={'col-8 col-xl-5 d-xl-flex align-items-center'}>
                                <Text text={data.value} color={colors.white} size={fonts.fontSize16} classes={'d-none d-xl-block'} />
                                <Div classes="d-flex d-xl-none align-items-center">
                                    <Div>
                                        <Image src={data.icon} />
                                    </Div>
                                    <Div>
                                        <Text text={data.name} color={colors.white} size={fonts.fontSize13} />
                                        <Text text={data.value} color={colors.white} size={fonts.fontSize13} />
                                    </Div>
                                </Div>
                            </Div>
                            <Div classes={'col-4 col-xl-3'}>
                                {
                                    (() => {
                                        if (data.type === "Best")
                                            return (<Div classes={'Dff-div d-flex mx-auto justify-content-center align-items-center best'}>
                                                {data.type}
                                            </Div>)
                                        else if (data.type === 'Match')
                                            return (<Div classes={'Dff-div d-flex mx-auto justify-content-center align-items-center match'}>
                                                {data.type}
                                            </Div>)
                                        else
                                            return (<Div classes={'Dff-div d-flex mx-auto justify-content-center align-items-center less'}>
                                                {data.type}
                                            </Div>)
                                    })()

                                }

                            </Div>
                        </Div>
                    ))
                }

            </ExchangeDiv>
        </>
    )
}