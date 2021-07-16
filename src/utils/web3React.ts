// import { InjectedConnector } from '@web3-react/injected-connector'
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import Web3 from 'web3'
// import getNodeUrl from './getRpcUrl'

// const POLLING_INTERVAL = 12000
// const rpcUrl = getNodeUrl()
// const chainId = parseInt(process.env.REACT_APP_CHAIN_ID as string, 10)

// const injected = new InjectedConnector({ supportedChainIds: [chainId] })

// const walletconnect = new WalletConnectConnector({
//   rpc: { [chainId]: rpcUrl },
//   bridge: 'https://bridge.walletconnect.org',
//   qrcode: true,
//   pollingInterval: POLLING_INTERVAL,
// })

export const getLibrary = (provider: any): Web3 => {
  return provider
}
