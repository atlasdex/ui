import styled from 'styled-components';
import useTheme from './../../hooks/useTheme';
import Div from './../DivComponent';
import Image from './../Image';
import Button from './../Button';
import Text from './../Text';
import SolletIcon from "assets/images/Sollet-Wallet-Icon.svg";
import { useGetWalletState } from 'state/hooks';
import { abbreviateAddress } from 'utils/utils';
import useAuth from 'hooks/useAuth';
import useSolBalance from 'hooks/useSolBalance';
import useAccountInfo from 'hooks/useAccountInfo';
import copyToClipboard from 'utils/copyToClipboard';

const AccountStyle = styled.div`
    padding : 4% 5%;
    .account-info-div {
        background : ${(props) => props.theme.isDark ? props.theme.gradients.multiColor3 : props.theme.gradients.multiColor3};
        border-radius: 10px;
        box-shadow :  ${(props) => props.theme.shadows.level2};
        padding : 30px 24px;
        .text-div {
            div{ color : white !important; }
        }
    }
    .line-height-20 {
        line-height: 20px;
    }
    .line-height-27 {
        line-height: 27px;
    }
    .address-btn-padding {
        padding: 11px 27px;
    }
    .account-btn-row {
        .cursor-pointer {
            cursor: pointer;
        }
    }
    ${(props) => props.theme.mediaQueries.maxWidthLG} {
        padding : 2% 3%;
        .image-wallet-icon {
            width : 40px;
        }
    }
`;
const AccountInfo: React.FC = () => {
    const { theme } = useTheme();
    const { colors, fonts, isDark } = theme;
    const walletState = useGetWalletState();
    const { disconnectWallet } = useAuth()

    const  { solBalance } = useSolBalance();
    const { accountInfo } =  useAccountInfo();
    
    return (
        <AccountStyle>
            <Div classes="account-info-div row m-0 align-items-center mb-4 d-flex">
                {/* this is for small screen */}
                <Div classes={"col-3 d-block d-lg-none"}>
                    <Image src={SolletIcon} width="83px" height="83px" classes={'mr-4 image-wallet-icon'} />
                </Div>
                <Div classes="col-9 d-block d-lg-none">
                    <Div classes="col-9 col-lg-5 d-flex align-items-center ">
                        <Image src={SolletIcon} width="83px" height="83px" classes={'mr-4 image-wallet-icon d-none d-lg-block'} />
                        <Div classes = "text-div">
                            <Text text={"Balance"} color={colors.white} size={fonts.fontSize16} weight={400} classes={'line-height-20 '} />
                            <Text text={solBalance + " SOL"} color={colors.white} size={fonts.fontSize22} weight={700} classes={'line-height-27'} />
                        </Div>
                    </Div>
                    <Div classes="col-9 col-lg-3  d-flex align-items-center">
                        <Div classes = "text-div">
                            <Text text={"Network"} color={colors.white} size={fonts.fontSize16} weight={400} classes={'line-height-20 '} />
                            <Text text={"Solana"} color={colors.white} size={fonts.fontSize22} weight={700} classes={'line-height-27'} />
                        </Div>
                    </Div>
                    <Div classes="col-9 col-lg-4  d-flex align-items-center">
                        <Div classes = "text-div">
                            <Text text={"Wallet"} color={colors.white} size={fonts.fontSize16} weight={400} classes={'line-height-20 '} />
                            <Text text={accountInfo?.walletName} color={colors.white} size={fonts.fontSize22} weight={700} classes={'line-height-27'} />
                        </Div>
                    </Div>

                </Div>
                {/* this is for large screen */}
                <Div classes="col-9 col-lg-5  d-none d-lg-flex align-items-center">
                    <Image src={SolletIcon} width="83px" height="83px" classes={'mr-4 image-wallet-icon'} />
                    <Div classes = "text-div">
                        <Text text={"Balance"} color={colors.white} size={fonts.fontSize16} weight={400} classes={'line-height-20 '} />
                        <Text text={solBalance + " SOl"} color={colors.white} size={fonts.fontSize22} weight={700} classes={'line-height-27'} />
                    </Div>
                </Div>
                <Div classes="col-9 col-lg-3  d-none d-lg-flex  align-items-center">
                    <Div classes = "text-div">
                        <Text text={"Network"} color={colors.white} size={fonts.fontSize16} weight={400} classes={'line-height-20 '} />
                        <Text text={"Solana"} color={colors.white} size={fonts.fontSize22} weight={700} classes={'line-height-27'} />
                    </Div>
                </Div>
                <Div classes="col-9 col-lg-4  d-none d-lg-flex align-items-center">
                    <Div classes = "text-div">
                        <Text text={"Wallet"} color={colors.white} size={fonts.fontSize16} weight={400} classes={'line-height-20 '} />
                        <Text text={accountInfo?.walletName} color={colors.white} size={fonts.fontSize22} weight={700} classes={'line-height-27'} />
                    </Div>
                </Div>
            </Div>


            <Button icon={<Image src={SolletIcon} width="27px" height="27px" classes={'mr-4'} />} title={walletState.publicKey} classes={'address-btn-padding'} weight={400} size={fonts.fontSize18} btnClasses={'d-none d-lg-block  mb-4'} />
            <Button icon={<Image src={SolletIcon} width="27px" height="27px" classes={'mr-4'} />} title={abbreviateAddress(walletState.publicKey, 7)} classes={'address-btn-padding'} weight={400} size={fonts.fontSize18} btnClasses={'d-block d-lg-none  mb-4'} />


            <Div classes="row m-0 account-btn-row">
                <Div classes="col-12 col-lg-4 text-center py-2 cursor-pointer" onClick = {() => { copyToClipboard(walletState?.publicKey) }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 8H10C8.89543 8 8 8.89543 8 10V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8Z" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V4" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Text text={'Copy Address'} color={colors.white} size={fonts.fontSize16} classes={'line-height-20 pt-3'} weight={400} ></Text>

                </Div>
                <Div classes="col-12 col-lg-4  text-center py-2 cursor-pointer">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.9502 5.24268L10.1928 1.00004L14.4355 5.24268" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.1923 15.1421L5.94967 19.3847L1.70703 15.1421" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.1929 0.99996V10.8995" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.94975 19.3848V9.48531" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <Text text={'Transaction History'} color={colors.white} size={fonts.fontSize16} classes={'line-height-20 pt-3'} weight={400} ></Text>

                </Div>
                <Div classes="col-12 col-lg-4  text-center py-2 cursor-pointer" onClick={() => {
                    disconnectWallet()
                }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H13" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 15L13 10L8 5" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 10H1" stroke={isDark ? colors.white : colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Text text={'Disconnect'} color={colors.white} size={fonts.fontSize16} classes={'line-height-20 pt-3'} weight={400} ></Text>

                </Div>

            </Div>
        </AccountStyle>
    )
}

export default AccountInfo;