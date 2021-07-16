import addresses from '../config/constants/contracts'
import { Address } from '../config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 1
  const chainId = process.env.REACT_APP_CHAIN_ID || mainNetChainId
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}

