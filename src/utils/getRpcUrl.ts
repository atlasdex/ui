// import random from 'lodash/random'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]

const getNodeUrl = (): string => {
  // const randomIndex = random(0, nodes.length - 1)
  // return nodes[randomIndex]
  return process.env.REACT_APP_NODE as string
}

export default getNodeUrl

export const getEndpoint = () => {
    return  "https://api.testnet.solana.com";
}
