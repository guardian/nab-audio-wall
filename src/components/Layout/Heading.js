// @flow
import styled from 'styled-components'
import styleVars from '../../styles'

const { COLOURS } = styleVars

type Props = {
  inverted?: boolean
}

const Heading = styled.h1`
  color: ${(props: Props) =>
    props.inverted ? COLOURS.bodyCopy.inverted : COLOURS.bodyCopy.default};
  font-size: 1.7rem;
  line-height: 1em;
  flex: 0 0 100%;
  text-align: center;
`

export default Heading
