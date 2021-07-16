import Wallet from '@project-serum/sol-wallet-adapter';

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}


// Global state

export interface State {
}

export interface ModalInitialState {
  walletModalOpen: boolean
  networkModalOpen : boolean
}

export interface WalletInitialState {
  connected?: boolean
  wallet ?: Wallet | null
  providerUrl?:string
  endpoint?: string
  publicKey ?: string

}
