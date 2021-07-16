import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './routerHistory'
import GlobalStyle from './style/Global'
import PageLoader from './components/PageLoader'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import MainLayout from 'components/layout/MainLayout'
import { ModalLayout } from 'components/layout/ModalLayout'
import useAutoWalletConnect from 'hooks/useAutoWalletConnect'



const Exchange = lazy(() => import('./views/Exchange'))
const PageNotFound = lazy(() => import('./views/PageNotFound'))
const App: React.FC = () => {
  useAutoWalletConnect();
  return (
    <Router history={history}>
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        {/* <ConnectionProvider> */}
          <ModalLayout />
          <MainLayout>
            <Switch>
              <Route path="/" exact>
                <Exchange />
              </Route>
              <Route
                component={PageNotFound}
              /> 
            </Switch>
          </MainLayout>
        {/* </ConnectionProvider> */}
      </SuspenseWithChunkError>

    </Router>
  );
}

export default App;
