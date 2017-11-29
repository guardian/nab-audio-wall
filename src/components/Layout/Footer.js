// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '../Icon'

import styleVars from '../../styles'

const { COLOURS, TYPE } = styleVars

const Wrapper = styled.footer`
  color: ${COLOURS.bodyCopy.inverted};
  background-color: ${COLOURS.bodyCopy.default};
  text-align: center;
  width: 100%;
  align-self: flex-end;
  height: 60px;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  font-family: ${TYPE.fontFamily.functional};
  position: fixed;
  bottom: 0;
  font-family: ${TYPE.fontFamily.functional};
  z-index: 100;
`
const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 33%;
  align-self: center;
  height: 100%;
`
const LinkItemWrapper = styled.div`
  button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    span {
      font-family: ${TYPE.fontFamily.functional};
    }
    &:hover,
    &:hover i:before,
    &:hover a {
      cursor: pointer;
      color: ${COLOURS.highlights};
    }
  }
  a {
    text-decoration: none;
    &:hover {
      color: ${COLOURS.highlights};
    }
    color: ${({ isActive }: boolean) =>
      isActive ? COLOURS.highlights : 'black'};
  }
  ${Icon} {
    padding-right: 0.5em;
  }
`

const LinkItemCopy = styled.span`
  color: ${({ isActive }) =>
    isActive ? COLOURS.highlights : COLOURS.bodyCopy};
`

type Props = {
  onMute: Function => void,
  isMuted: boolean
}

const Footer = ({ onMute, isMuted }: Props) => (
  <Wrapper>
    {/* extra div to create 3 columns */}
    <FooterSection />
    <FooterSection isActive={isMuted}>
      <LinkItemWrapper>
        <button onClick={onMute}>
          <Icon icon="e90a" color={isMuted ? COLOURS.highlights : 'black'} />
          <LinkItemCopy isActive={isMuted}>Mute</LinkItemCopy>
        </button>
      </LinkItemWrapper>
    </FooterSection>
    <FooterSection>
      <LinkItemWrapper>
        <Link to="/get-help">
          <Icon icon="e909" />
          <LinkItemCopy>Need Support?</LinkItemCopy>
        </Link>
      </LinkItemWrapper>
    </FooterSection>
  </Wrapper>
)

export default Footer
