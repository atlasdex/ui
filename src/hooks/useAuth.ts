import { useCallback, useState } from 'react'
import { WalletAdapter } from 'wallet-adapters'
import Wallet from '@project-serum/sol-wallet-adapter';
import { useWalletState } from 'state/hooks'
import { getProvider } from 'utils/utils'
import { getEndpoint } from 'utils/getRpcUrl';
import { SolanaWeb3Class } from 'utils/solanaWeb3'

const useAuth = () => {
    const endpoint = getEndpoint();
    let [wallet, setWallet] = useState<WalletAdapter | undefined>(undefined);
    const { setWalletState } = useWalletState();
    const connectWallet = useCallback((providerUrl: string) => {
        const provider = getProvider(providerUrl);
        if (provider) {
            const updateWallet = () => {
                // hack to also update wallet synchronously in case it disconnects
                // eslint-disable-next-line react-hooks/exhaustive-deps
                wallet = new (provider.adapter || Wallet)(
                    provider.url,
                    endpoint,
                ) as WalletAdapter;
                setWallet(wallet);
                wallet.connect();

                wallet.on('connect', async () => {
                    if (wallet?.publicKey) {
                        const walletPublicKey = wallet.publicKey.toBase58();
                        console.log('connected');
                        SolanaWeb3Class.solanaProvider(provider);
                        SolanaWeb3Class.solanaWeb3(wallet);
                        localStorage.setItem('connected', "true");
                        localStorage.setItem('providerUrl', providerUrl);
                        localStorage.setItem('endpoint', endpoint);
                        localStorage.setItem('publicKey', walletPublicKey);

                        setWalletState({ connected: true, providerUrl, publicKey: walletPublicKey });
                    }
                });

            };
            if (document.readyState !== 'complete') {
                // wait to ensure that browser extensions are loaded
                const listener = () => {
                    updateWallet();
                    window.removeEventListener('load', listener);
                };
                window.addEventListener('load', listener);
                //   return () => window.remoautoConnectveEventListener('load', listener);
            } else {
                updateWallet();
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const disconnectWallet = useCallback(() => {
        setWalletState({ connected: false });
        localStorage.clear();
        const wallet = SolanaWeb3Class.solanaWeb3();
        wallet.disconnect();
        wallet.on('disconnect', () => {
            console.log('disconnect Wallet update');
        });
        // eslint-disable-next-line
    }, [wallet])

    return { connectWallet, disconnectWallet }
}

export default useAuth
