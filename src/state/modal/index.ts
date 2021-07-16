import { createSlice } from "@reduxjs/toolkit";
import { ModalInitialState } from "state/types";

const initialState : ModalInitialState = {
    walletModalOpen: false,
    networkModalOpen : false
};


export const modalState = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setWalletConnectModal: (state) => {
            state.walletModalOpen = !state.walletModalOpen;
        },
        setNetworkModal: (state) => {
            state.networkModalOpen = !state.networkModalOpen;
        },
    }
});

// Actions
export const {
    setWalletConnectModal,
    setNetworkModal,
} = modalState.actions;

export default modalState.reducer;
