import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'state'
import useRefresh from 'hooks/useRefresh'
import { setNetworkModal, setWalletConnectModal } from "./actions"
import { useSelector } from 'react-redux'
import { setWalletReducer } from './wallet'
import { WalletInitialState } from './types'

export const useFetchPublicData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {

  }, [dispatch, slowRefresh])


}

export const useWalletState = () => {
  const dispatch = useAppDispatch();

  const setWalletState =  useCallback((wallet : WalletInitialState)=>{
    dispatch(setWalletReducer({
      connected: wallet?.connected,
      // wallet: Wallet,
      providerUrl: wallet?.providerUrl,
      endpoint: wallet?.endpoint,
      publicKey: wallet?.publicKey
    }));
    // eslint-disable-next-line
  },[]);


  return { setWalletState }
}

export const useModalState = () => {

  const dispatch = useAppDispatch();
  const setWalletModalState =  useCallback(()=>{
    dispatch(setWalletConnectModal());
    // eslint-disable-next-line
  },[]);

  const setNetworkModalState =  useCallback(()=>{
    dispatch(setNetworkModal());
    // eslint-disable-next-line
  },[]);
  
  return { setWalletModalState, setNetworkModalState }
}

export const useWalletModal = () => {
  const walletOpen = useSelector((state: any) => state.modal.walletModalOpen);
  return walletOpen
}
export const useNetworkModal = () => {
  const walletOpen = useSelector((state: any) => state.modal.networkModalOpen);
  return walletOpen
}

export const useGetWalletState = () => {
  const wallet = useSelector((state: WalletInitialState) => state.wallet);
  return wallet
}
