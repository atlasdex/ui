import React from 'react'
import styled from 'styled-components';
import Text from "components/Text";
import Div from 'components/DivComponent';
import Image from 'components/Image';
import Tab from 'components/Tab';
// import History from './components/History';
import { Routing, Exhanges, Market } from './components';
import GradientLayout from 'components/layout/GradientLayout';
import Button from 'components/Button';
import GraphImage from "assets/images/Screenshot.png";
import LightGraphImage from "assets/images/Light/light-graph.png";
import Clock from "assets/images/clock-atlas.svg";
import RefreshIcon from "assets/images/Refresh-Icon.svg";
import AdvanceSetting from "assets/images/Setting-Advance.svg";
import PlusIcon from "assets/images/Plus-Icon.svg";
import LightClock from "assets/images/Light/Color-Clock.svg";
import LightRefreshIcon from "assets/images/Light/Color-Refresh-Icon.svg";
import LightAdvanceSetting from "assets/images/Light/Color-Advance-Setting-Icon.svg";
import LightPlusIcon from "assets/images/Light/Color-Plus-Icon.svg";
import WalletIcon from "assets/images/wallet-icon.svg";
import SolanaIcon from "assets/images/Solana-Icon.svg";
import ConnectedWalletIcon from "assets/images/connected-wallet.svg";
import useTheme from 'hooks/useTheme';
import { useGetWalletState,useModalState } from 'state/hooks';
import useSolBalance from 'hooks/useSolBalance';

const ControlContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  .padding {
    padding : 1.3rem 1.9rem 3px 1.9rem;
  }
  .wallet-btn-section{
    button {
      margin-right : 15px;
    }
    .btn-custom-padding {
      padding : 5px 25px 5px 10px;
    }
  }
  .historyBorderGradient {
    padding: 1px;
    background: ${(props) => props.theme.isDark ? props.theme.gradients.multiColor : props.theme.gradients.buttonBorderDark};
    border-radius: 10.7692px !important;
    border: none !important;
    height : 100%;
    .table-parent-div {
     background: ${(props) => props.theme.isDark ? props.theme.gradients.blue : props.theme.gradients.whiteGrayGradient};
     border-radius: 10.2px;
     height : 100%;
     
     .tab-div {
       border-bottom: 1.07px solid;
       border-image-source: linear-gradient(0deg, #C4C4C4, #C4C4C4);
      a {
        margin-right :5% !important;
        padding-left :4% !important;
        padding-right : 4% !important;
        color : rgba(170, 170, 170, 1);
        &.active {
         color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
        }
      }
     }
    }
  }
  .market-section {
      .tab-div {
        a {
          color : #515E91;
          &.active {
            color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
           }
        }
      }
      .btns-div {
        button{
          margin-left : 18px;
        }
        .btn-custom-padding{
          padding : 8px 10px;
        }
      }
  }
  .bg-btn-color {
    background : ${(props) => props.theme.isDark ? props.theme.colors.plumb : props.theme.colors.lightFailure}
  }
  .connected-btn-padding {
    padding : 0px 0px 0px 2px !important;
  }
  .width-110 {
    min-width : 110px;
    width: fit-content;
  }
  .width25-height25 {
    width : 25px;
    height : 25px;
  }
  ${(props) => props.theme.mediaQueries.maxWidthMD} {
      .padding {
        padding : 10px 1rem 3px 1rem !important;
      }
  }
  ${(props) => props.theme.mediaQueries.maxWidthSM} {
    .historyBorderGradient {
      .padding {
        padding : 10px 1rem 3px 1rem !important;
      }
    } 
  }

`
const Exchange: React.FC = () => {

  let walletState = useGetWalletState();
  const { setNetworkModalState , setWalletModalState} = useModalState();

  const { theme, isDark } = useTheme();
  const { colors, fonts, gradients } = theme;

  const { solBalance } = useSolBalance();
  const [historyTabs, setHistoryTabs] = React.useState<boolean>(false);
  const [marketingTab, setMarketingTab] = React.useState<boolean>(true);
  
  const AddressAndBalance = () => {
    return (
      <Div classes={'d-flex align-items-center '}>
        <Text text={solBalance + " SOL"} color={colors.white} size={fonts.fontSize15} classes={'btn-custom-padding width-110'} />
        <Button icon={<Image src={ConnectedWalletIcon} width="34.78px" classes="mr-3" />} classes={'btn-custom-padding bg-btn-color'} btnClasses="mb-md-0 mr-0 connected-btn-padding" title={`${walletState.publicKey.slice(0, 10)}...`} size={fonts.fontSize15} weight={400} width={'fit-content'} />
      </Div>
    )
  }
  return (
    <>
      <ControlContainer>
        <Text text={'THE NO. 1 DEFI AGGREGATOR – Atlas NETWORK'} classes={'w-100 text-center py-4'} color={'white'} size={fonts.fontSize24} weight={500} />
        <Div classes={'wallet-btn-section d-block d-md-flex align-items-center justify-content-center p-3 pb-md-5'}>
          <Button icon={<Image src={SolanaIcon} width="34.78px" classes="mr-3" />} classes={'btn-custom-padding'} btnClasses="mb-3 mb-md-0" title={'Solana'} size={fonts.fontSize15} weight={400} width={'158.77px'} innerWidth = "154px" onClick={() =>  setNetworkModalState()} />
          {
            walletState.connected ?
              <Button classes={''} btnClasses="mb-3 mb-md-0" title={<AddressAndBalance />} size={fonts.fontSize15} weight={400} width={'fit-content'} onClick={() => {  setWalletModalState() }} /> :
              <Button icon={<Image src={WalletIcon} width="34.78px" classes="mr-3" />} classes={'btn-custom-padding'} btnClasses="mb-3 mb-md-0" title={'Connect Wallet'} size={fonts.fontSize15} weight={400} width={'fit-content'} onClick={() => {  setWalletModalState() }} />
          }

        </Div>
        <Div classes={"row market-section mx-0 mb-5"}>
          <Div classes={"col-12"}>
            <GradientLayout padding={''} borderRadius={''} backgroundGradient={gradients.blue} broderGradient={gradients.multiColor}>
              <Div classes="padding d-block d-md-flex justify-content-between">
                <Div classes={'tab-div '}>
                  <Tab text="Market" size={'fontSize18'} classes={marketingTab ? 'active' : ""} onClick={() => { setMarketingTab(true) }} />
                  <Tab text="Limit" size={'fontSize18'} classes={marketingTab ? '' : "active"} onClick={() => { setMarketingTab(false) }} />
                </Div>

                <Div classes="btns-div d-flex mt-3 mt-md-0">
                  <Button icon={<Image src={isDark ? Clock : LightClock} classes="width25-height25" />} classes={'btn-custom-padding d-flex justify-content-center'} />
                  <Button icon={<Image src={isDark ? RefreshIcon : LightRefreshIcon} classes="width25-height25" />} classes={'btn-custom-padding d-flex justify-content-center'} />
                  <Button icon={<Image src={isDark ? PlusIcon : LightPlusIcon} classes="width25-height25" />} classes={'btn-custom-padding d-flex justify-content-center'} />
                  <Button icon={<Image src={isDark ? AdvanceSetting : LightAdvanceSetting} classes="width25-height25" />} classes={'btn-custom-padding d-flex justify-content-center'} />

                </Div>
              </Div>
              <Div classes={'historyTabContent'}>
                <Div classes={''}>
                  {
                    marketingTab ? <Market /> : <Market />
                  }
                </Div>
              </Div>
            </GradientLayout>
          </Div>
        </Div>


        {/* history row */}
        <Div classes={`row mx-0 mb-5`}>
          <Div classes={'col-md-6 col-lg-7'}>
            <Image src={isDark ? GraphImage : LightGraphImage} />
          </Div>
          <Div classes={'col-md-6 col-lg-5 '}>
            <Div classes={'historyBorderGradient'}>
              <Div classes={'table-parent-div'}>
                <Div classes={'tab-div padding'}>
                  <Tab text="Exchange" size={'fontSize16'} classes={historyTabs ? '' : "active"} onClick={() => { setHistoryTabs(false) }} />
                  <Tab text="History" size={'fontSize16'} classes={historyTabs ? 'active' : ""} onClick={() => { setHistoryTabs(true) }} />
                </Div>
                <Div classes={'historyTabContent'}>
                  <Div classes={''}>
                    {
                      historyTabs ? <Exhanges /> : <Exhanges />
                    }
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div classes="Routing-row mb-5">
          <Routing />
        </Div>
      </ControlContainer>
    </>
  )
}

export default Exchange
