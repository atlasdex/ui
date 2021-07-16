import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export default Container
