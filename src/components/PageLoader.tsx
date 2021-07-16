import React from 'react'
import styled from 'styled-components'
import Page from './layout/Page'
import Spinner from './Spinner'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default PageLoader
