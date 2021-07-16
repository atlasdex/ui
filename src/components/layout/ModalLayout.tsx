import CustomModal from 'components/Modal';
import { useNetworkModal, useWalletModal, useGetWalletState, useModalState } from 'state/hooks';
import AccountInfo from 'components/Account';
import WalletComponent from 'components/Wallet';
import useAuth from 'hooks/useAuth';
import Div from 'components/DivComponent';
import Button from 'components/Button';
import Networks from 'config/constants/network';
import Image from "components/Image";

export const ModalLayout = () => {
    const { setWalletModalState, setNetworkModalState } = useModalState();
    const { connectWallet } = useAuth();
    let walletState = useGetWalletState();

    return (
        <>

            <CustomModal
                show={useWalletModal()}
                onHide={() => {
                    setWalletModalState()
                }}
                size="lg"
                header={<div className={'text-left text-md-center pt-2 pl-3 pt-md-3'}> {walletState.connected ? "Account" : "Connect Wallet"}</div>}
                bodyContent={
                    walletState.connected ?
                        <AccountInfo /> :
                        <WalletComponent onClick={(url) => {
                            connectWallet(url)
                        }} />
                }
                centered={true}
            />
            <CustomModal
                show={useNetworkModal()}
                onHide={() => {
                    setNetworkModalState();
                }}
                size="lg"
                modalClasses="md-modal"
                header={<div className={'text-left text-md-center pt-2 pl-3 pt-md-3'}> Switch Network</div>}
                bodyContent={
                    <Div classes={'p-4 row justify-content-center'}>
                        {
                            Networks.map((network, index) => (
                                <Div classes={'col-8 col-lg-4 mb-2'} key={index}>
                                    <Button
                                        icon={<Image src={network.selectIcon} width="36.48px" height="36.48px" classes={'mr-2 mr-md-3'} />}
                                        title={network.name}
                                        classes={'py-1 px-2'}
                                        width="inherit"
                                        disabled={network.disabled}
                                    />
                                </Div>
                            ))
                        }
                    </Div>
                }
                centered={true}
                animation={false}
            />
        </>
    );
}

// export function useWallet() {
//     const context = useContext(WalletContext);
//     if (!context) {
//         throw new Error('Missing wallet context');
//     }

//     const wallet = context.wallet;
//     return {
//         connected: context.connected,
//         wallet: wallet,
//         providerUrl: context.providerUrl,
//         setProvider: context.setProviderUrl,
//         providerName: context.providerName,
//         select: context.select,
//         connect() {
//             wallet ? wallet.connect() : context.select();
//         },
//         disconnect() {
//             wallet?.disconnect();
//         },
//     };
// }
