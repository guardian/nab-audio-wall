// @flow
import React from 'react'
import styled from 'styled-components'
import Routes from '../routes'

import { MockGuardianHeader } from './Layout'

/* Constants */
import { globalStyles } from '../styles'

/* eslint-disable no-unused-expressions */
globalStyles

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  height: 100%;
`

const App = () => (
  <Wrapper>
    <MockGuardianHeader />
    {Routes}
  </Wrapper>
)

export default App
