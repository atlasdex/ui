import { WalletTypeArray } from "./types";
import SolletIcon from "assets/images/Sollet-Wallet-Icon.svg";
import MathWalletIcon from "assets/images/MathWallet-Icon.svg";
import {
  MathWalletAdapter,
  SolletExtensionAdapter
} from '../../wallet-adapters';

const WALLET_PROVIDERS: WalletTypeArray[] = [
  {
    name: "Sollet Extension",
    url: 'https://www.sollet.io/extension',
    icon: SolletIcon,
    adapter: SolletExtensionAdapter as any,
  },
  {
    name: 'Sollet.io',
    url: 'https://www.sollet.io',
    icon: SolletIcon,
  },
  {
    name: 'MathWallet',
    url: 'https://www.mathwallet.org',
    icon: MathWalletIcon,
    adapter: MathWalletAdapter,
  },
]

export default WALLET_PROVIDERS