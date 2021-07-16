import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import ModalReducer from './modal'
import WalletReducer from './wallet'

console.log(process.env.NODE_ENV);

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    modal : ModalReducer,
    wallet: WalletReducer
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
