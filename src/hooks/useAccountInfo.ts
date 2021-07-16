import { useEffect, useState } from "react";
import { useGetWalletState } from "state/hooks";
import { SolanaWeb3Class } from "utils/solanaWeb3";
import { AccountInfo } from "./types";
import useSolBalance from "./useSolBalance";


const useAccountInfo = () => {
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>();
  const walletState = useGetWalletState();
  const { solBalance } = useSolBalance();
  const provider = SolanaWeb3Class.SolanaProvider;
  useEffect(() => {
    if (walletState.connected) {
      try {
        setAccountInfo({
          walletName: provider?.name,
          publicKey: walletState?.publicKey,
          balance: solBalance
        })
      } catch (error) {
        console.log("Use SOl Balance error ", error);

      }
    } 
    // eslint-disable-next-line
  }, [walletState]);
  return { accountInfo }
}

export default useAccountInfo
