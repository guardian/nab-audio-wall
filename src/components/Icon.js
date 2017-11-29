// @flow
import styled from 'styled-components'

type Props = {
  color: 'string',
  icon: 'string',
  size: 'string'
}

const Icon = styled.i`
&:after {
  font-family: 'audiowallicons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: ${({ color }: Props) => color || 'black'};
  content: '\\${({ icon }: Props) => icon}';
  font-size: ${({ size }: Props) => size || '1em'};
  cursor: ${props => (props.isInteractive ? 'pointer' : 'default')};
}
`
export default Icon
