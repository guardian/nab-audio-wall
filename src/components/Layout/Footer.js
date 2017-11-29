// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '../Icon'

import styleVars from '../../styles'

const { PUBLIC_URL } = process.env
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
  flex-basis: 25%;
  align-self: center;
  height: 100%;
  @media screen and (max-width: 767px) {
     flex-basis: 33%;
  }
`
const FooterSectionHide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 16%;
  align-self: center;
  height: 100%;
  @media screen and (max-width: 767px) {
     display: none;
  }
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

const BackButton = styled.div`
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
  span {
    vertical-align: middle;
  }
  img {
  	vertical-align: middle;
    margin-right: 20px;
  }
  @media screen and (max-width: 767px) {
    img {
      margin-left: 10px;
      margin-right: 0px;
    }
    span {
      display: none;
    }
  }
`

const NabLogo = styled.div`
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
  span {
    vertical-align: middle;
  }
  img {
  	vertical-align: middle;
    margin-left: 20px;
  }
  @media screen and (max-width: 767px) {
    img {
      margin-left: 0;
      margin-right: 10px;
    }
    span {
      display: none;
    }
  }
`

type Props = {
  onMute: Function => void,
  isMuted: boolean
}

const Footer = ({ onMute, isMuted }: Props) => (
  <Wrapper>
    <FooterSection>
      <BackButton>
        <Link to="/overview">
          <img src={`${PUBLIC_URL || ''}/icons/icon_back.svg`} alt="Back" />
          <LinkItemCopy>Back</LinkItemCopy>
        </Link>
      </BackButton>
    </FooterSection>
    <FooterSectionHide isActive={isMuted}>
      <LinkItemWrapper>
        <button onClick={onMute}>
          <Icon icon="e90a" color={isMuted ? COLOURS.highlights : 'black'} />
          <LinkItemCopy isActive={isMuted}>Mute</LinkItemCopy>
        </button>
      </LinkItemWrapper>
    </FooterSectionHide>
    <FooterSection>
      <LinkItemWrapper>
        <Link to="/get-help">
          <Icon icon="e909" />
          <LinkItemCopy>Need Support?</LinkItemCopy>
        </Link>
      </LinkItemWrapper>
    </FooterSection>
    <FooterSection>
      <NabLogo>
        <a href="https://nab.com.au">
          <LinkItemCopy>Paid For By</LinkItemCopy>
          <img style={{width:"72", verticalAlign: "middle", marginLeft: "20px"}} src={`${PUBLIC_URL || ''}/icons/icon_logo-nab.png`} alt="Paid For By NAB" />
        </a>
      </NabLogo>
    </FooterSection>
  </Wrapper>
)

export default Footer
