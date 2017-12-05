// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import styleVars from '../styles'

const { PUBLIC_URL } = process.env
const { TYPE, COLOURS, BP } = styleVars

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: radial-gradient(ellipse at top, #202c96 0%, #3d2f51 100%);
  background-position: top center;
  color: white;
  justify-content: space-between;
  padding: 0 2rem;
  flex: 1 0 auto;
`
const BodyContent = styled.div`
  max-width: 800px;
  flex: 1 0 auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.header`
  text-align: center;
  h1 {
    font-size: ${TYPE.siteTitle.fontSize}rem;
  }
`
const Body = styled.div`
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
`
const ExperienceBlurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  justify-content: center;
  line-height: 1.5em;
  text-align: center;

  p {
    max-width: 8rem;
    font-family: ${TYPE.fontFamily.functional};
  }
  i {
    /* FIXME: this is off-centre */
    margin: 0 auto;
  }
`

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  position: relative;

  @media (min-width: ${BP.tablet7}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const PaidFor = styled.div`
  font-family: ${TYPE.fontFamily.functional};
  font-size: 0.5em;

  @media (max-width: 599px) {
    order: 1;
    margin-top: 1rem;
  }

  img {
    display: block;
    margin-top: 0.5rem;
    width: 4rem;
  }
`

const CTA = styled.div`
  border-radius: 1rem;
  border: #fff solid 1px;
  color: ${COLOURS.bodyCopy.default};
  display: block;
  font-family: ${TYPE.fontFamily.functional};
  line-height: 1;
  padding: 0.5rem;
  text-decoration: none;

  @media (min-width: ${BP.tablet7}px) {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: ${COLOURS.bodyCopy.default};
    color: black;
    font-weight: bold;
    mix-blend-mode: screen;
  }
`

const Share = styled.div`
  align-items: center;
  display: flex;
  font-family: ${TYPE.fontFamily.functional};

  @media (max-width: 599px) {
    margin-top: 1.5rem;
  }
`

const ShareIcons = styled.div`
  display: flex;

  a {
    align-items: center;
    display: flex;
    height: 1.5em;
    justify-content: center;
    margin-left: 0.5em;
  }
`

const Intro = () => (
  <Wrapper>
    <BodyContent>
      <Header>
        <h1 style={{ margin: "0.67em 0" }}>Hear them speak</h1>
      </Header>
      <Body>
        <p style={{ margin: "1em 0" }}>
          One in three women have experienced physical or sexual violence
          perpetrated by someone they know.
        </p>

        <p style={{ margin: "1em 0" }}>
          Domestic and family violence can take on many forms - from physical
          assault and manipulation to financial and emotional abuse. One of the
          challenging issues with this kind of abuse is that it’s victims are
          often silenced - due to fear, loss of confidence, lack of access to
          support networks, and because the media struggles to properly
          represent the conversation. As a result, survivors lose their voice,
          their independence, and the ability to share their stories.
        </p>
      </Body>
      <ExperienceBlurb>
        <Icon icon="e902" color="white" size="4em" />
        <p style={{ margin: "1em 0" }}>Plug in headphones for the best experience</p>
      </ExperienceBlurb>
    </BodyContent>
    <Footer>
      <PaidFor>
        Paid for by
        <img src={`${PUBLIC_URL || ''}/icons/icon-logo.png`} alt="NAB Logo" />
      </PaidFor>
      <Link to="/overview" style={{ textDecoration: 'none' }}>
        <CTA tabindex="0">Click here to begin</CTA>
      </Link>
      <Share>
        Share this
        <ShareIcons>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href.split("#")[0]}`}>
            <img
              src={`${PUBLIC_URL || ''}/icons/icon_fb.png`}
              alt="Share with Facebook"
            />
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${window.location.href.split("#")[0]}`}>
            <img
              src={`${PUBLIC_URL || ''}/icons/icon_twitter.png`}
              alt="Share with Twitter"
            />
          </a>
        </ShareIcons>
      </Share>
    </Footer>
  </Wrapper>
)

export default Intro
