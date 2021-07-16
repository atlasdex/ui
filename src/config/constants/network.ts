import { NetworksType } from "./types";
import SolanaIcon from "assets/images/Solana-Icon.svg";
import EthereumIcon from "assets/images/ethereum.svg";
import Binance from "assets/images/binance.svg";
import SolanaSelectedIcon from "assets/images/Solana-Selected-Icon.svg";

const Networks: NetworksType[] = [
    {
        name: "Solana",
        icon: SolanaIcon,
        disabled : false,
        selectIcon : SolanaSelectedIcon
    },
    {
        name: "Ethereum",
        icon: EthereumIcon,
        disabled : true,
        selectIcon : EthereumIcon
    }, 
    {
        name: "Binance",
        icon: Binance,
        disabled : true,
        selectIcon : Binance
    }
]

export default Networks;