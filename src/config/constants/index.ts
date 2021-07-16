import { WalletInfo } from './types'
import METAMASK_ICON_URL from '/assets/images/metamask.png'
import INJECTED_ICON_URL from '/assets/images/arrow-right.svg'
import {  injected } from 'connectors'

export { default as poolsConfig } from './pools'
export { default as FooterLinks } from './footerLink'


export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
    INJECTED: {
      connector: injected,
      name: 'Injected',
      iconURL: INJECTED_ICON_URL,
      description: 'Injected web3 provider.',
      href: null,
      color: '#010101',
      primary: true,
    },
    METAMASK: {
      connector: injected,
      name: 'MetaMask',
      iconURL: METAMASK_ICON_URL,
      description: 'Easy-to-use browser extension.',
      href: null,
      color: '#E8831D',
    },
    
  }
  
  export const NetworkContextName = 'NETWORK'
  