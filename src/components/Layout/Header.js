// @flow
import React, { type Element } from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  padding: 1rem 2.25rem;
  color: white;
  flex: 0 0 100%;
`

type Props = {
  children: Array<Element<*>>
}

const Header = (props: Props) => <Wrapper>{[...props.children]}</Wrapper>

export default Header
