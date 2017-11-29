// @flow
import React, { type Element } from 'react'
import styled from 'styled-components'
import styleVars from '../../styles'

const { COLOURS } = styleVars

type Props = {|
  +children: Element<*>,
  +style: string,
  inverted?: boolean
|}

const Wrapper = styled.div`
  font-size: ${(props: Props) => props.rem || 1}rem;
  color: ${(props: Props) =>
    props.inverted ? COLOURS.bodyCopy.inverted : COLOURS.bodyCopy.default};
`

const BodyCopy = (props: Props) => {
  let rem
  switch (props.style) {
    case 'small':
      rem = 0.9
      break
    case 'tiny':
      rem = 0.8
      break
    default:
      rem = 1
  }
  return (
    <Wrapper rem={rem} {...props}>
      {props.children}
    </Wrapper>
  )
}

export default BodyCopy
