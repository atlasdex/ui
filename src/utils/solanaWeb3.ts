import { getProvider } from "./utils"
import Wallet from '@project-serum/sol-wallet-adapter';
import { getEndpoint } from "./getRpcUrl";
import { WalletAdapter } from "wallet-adapters";
import { Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
import { WalletTypeArray } from "config/constants/types";

export class SolanaWeb3Class {
    public static SolanaWeb3Wallet : WalletAdapter;
    public static SolanaProvider : WalletTypeArray;

    public static solanaWeb3 (obj: WalletAdapter = null) {
        if(obj == null) return this.SolanaWeb3Wallet;
        else{
            this.SolanaWeb3Wallet = obj;
            return this.SolanaWeb3Wallet;
        }
    }
    /**
     * This is use to set provider informations.
     */
    public static solanaProvider (obj: WalletTypeArray= null) {
        if(obj == null) return this.SolanaProvider;
        else{
            this.SolanaProvider = obj;
            return this.SolanaProvider;
        }
    }

    public static async getAccountInfo () {    
        const con = new Connection(getEndpoint(), "confirmed")
        let walletInfo = await con.getAccountInfo(this.SolanaWeb3Wallet?.publicKey);
        return walletInfo;
    }

    public static async getBalance () {
        const con = new Connection(getEndpoint(), "confirmed")
        const balance = await con.getBalance(this.SolanaWeb3Wallet?.publicKey);
        return balance ? balance  : 0 ;
    }
}


export const solanaWeb3 = () => {
    const provider =  getProvider('https://www.mathwallet.org')
    return  new (provider.adapter || Wallet)(
        provider?.url,
        getEndpoint(),
    ) as WalletAdapter;
}

export const  getAccountInfo = async (publicKey : string = "") => {    
    const web3  = solanaWeb3();
    const con = new Connection(getEndpoint(), "confirmed")
    let walletInfo = await con.getAccountInfo(web3.publicKey);
    return walletInfo;
}

export const  getBalance = async () => {
    const web3  = solanaWeb3();
    const con = new Connection(getEndpoint(), "confirmed")
    const balance = await con.getBalance(web3.publicKey);
    return balance;

}
export const convertPublicKey = (key :string) => {
    return new PublicKey(key);
}