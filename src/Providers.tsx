import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { getLibrary } from 'utils/web3React'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
          <HelmetProvider>
            <ThemeContextProvider>
                <RefreshContextProvider>
                  <ToastContainer />
                  {children}
                </RefreshContextProvider>
            </ThemeContextProvider>
          </HelmetProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
