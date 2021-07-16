import { useEffect, useState } from 'react';
import { useGetWalletState } from 'state/hooks';
import { stringToBoolean } from 'utils/utils';
import useAuth from './useAuth';

/**
 * Returns the previous value of the given value
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */
const useAutoWalletConnect = () => {
  const [autoConnect] = useState (stringToBoolean(localStorage.getItem('connected')));
  const { connectWallet } = useAuth();
  const walletState = useGetWalletState();

  useEffect (()=>{
      if (autoConnect) {
          connectWallet(walletState?.providerUrl)
      }
      // eslint-disable-next-line
  },[autoConnect]);
}

export default useAutoWalletConnect
