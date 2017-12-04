// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import styleVars from '../styles'

const { PUBLIC_URL } = process.env
const { TYPE, COLOURS } = styleVars

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at top, #202c96 0%, #3d2f51 100%);
  background-position: top center;
  color: white;
  justify-content: space-between;
  padding: 0 2rem;
`
const BodyContent = styled.div`
  max-width: 800px;
  height: 100%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`

const PaidFor = styled.div`
  width: 90px;
  height: 60px;
  font-size: 0.5rem;
  font-family: ${TYPE.fontFamily.functional};
  img {
    margin-top: 1em;
    max-width: 100%;
  }
`

const Share = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  font-size: 1rem;
  font-family: ${TYPE.fontFamily.functional};
`

const ShareIcons = styled.div`
  display: flex;
  flex-direction: row;
  a {
    flex-grow: 1;
    align-self: center;
    text-align: center;
    img {
      display: inline;
    }
  }
`

const CTA = styled.a`
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.5rem;
  display: inline-block;
  text-decoration: none;
  color: ${COLOURS.bodyCopy.default};
  position: relative;
  &:hover {
    color: black;
    /* NOTE: https://css-tricks.com/how-to-do-knockout-text/ */
    mix-blend-mode: screen;
    font-weight: bold;
    background-color: ${COLOURS.bodyCopy.default};
    cursor: pointer;
  };
  font-family: 'Guardian Agate Sans', sans-serif;
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
        Paid for by<br />
        <img src={`${PUBLIC_URL || ''}/icons/icon-logo.png`} alt="NAB Logo" />
      </PaidFor>
      <Link to="/overview" style={{ textDecoration: 'none' }}>
        <CTA>Click here to begin</CTA>
      </Link>
      <Share>
        Share this
        <ShareIcons>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${
              window.location.href.split("#")[0]
            }`}
          >
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
