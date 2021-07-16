import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WalletInitialState } from "state/types";

const initialState : WalletInitialState = {
    connected: false ,
    wallet: localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null,
    providerUrl: localStorage.getItem('providerUrl') ? localStorage.getItem('providerUrl'): "",
    endpoint: localStorage.getItem('endpoint') ? localStorage.getItem('endpoint'): "",
    publicKey : localStorage.getItem('publicKey') ? localStorage.getItem('publicKey'): ""
};


export const walletState = createSlice({
    name: "walletState",
    initialState,
    reducers: {
        setWalletReducer: (state , wallet: PayloadAction<WalletInitialState>) => {
            state.connected = Boolean(wallet.payload.connected)
            state.providerUrl = wallet.payload.providerUrl ? (wallet.payload.providerUrl) : state.providerUrl
            state.endpoint = (wallet.payload.endpoint)
            state.publicKey = (wallet.payload.publicKey)
            state.wallet = (wallet.payload.wallet  ? wallet.payload.wallet : state.wallet )
        },
        setProviderReducer: (state , wallet: PayloadAction<WalletInitialState>) => {
            state.providerUrl = wallet.payload.providerUrl ? (wallet.payload.providerUrl) : state.providerUrl
            },
    }
});

// Actions
export const {
    setWalletReducer,
    setProviderReducer
} = walletState.actions;

export default walletState.reducer;
