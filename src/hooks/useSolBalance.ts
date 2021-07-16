import { useEffect, useState } from "react";
import { useGetWalletState } from "state/hooks";
import { solBalanceFormat } from "utils/formatBalance";
import { SolanaWeb3Class } from "utils/solanaWeb3";
import useRefresh from "./useRefresh";
const useSolBalance = () => {
    const [solBalance, setSolBalance] = useState (0);
    const walletState = useGetWalletState();
    const { fastRefresh } = useRefresh()
    useEffect (()=>{
        if (walletState.connected) {
            try {
              SolanaWeb3Class.getBalance().then((res)=>{
                  setSolBalance(solBalanceFormat(res));
              })
            } catch (error) {
                console.log("Use SOl Balance error ",error);
            }
        }
    },[walletState,fastRefresh]);
    return {solBalance}
  }
  export default useSolBalance