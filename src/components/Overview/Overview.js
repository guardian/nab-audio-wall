import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import styleVars from '../../styles'
import { Footer } from '../../components/Layout'
import data from '../../data'

const { BP, TYPE } = styleVars

/* TODO: fix up animations with:
  https://stackoverflow.com/questions/16516793/css3-reverse-animation-on-mouse-out-after-hover
*/

const cubicBezier = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  height: 100vh;
  width: 100%;
  margin-bottom: 60px;
  @media (min-width: ${BP.tablet}px) {
    flex-direction: row;
  }
`

const SectionBody = styled.div`
  font-size: 0.9rem;
  font-weight: normal;
  height: 0px;
  max-height: 0px;
  max-width: 300px;
  opacity: 0;
  text-align: center;
  transition: max-height 0.25s ${cubicBezier}, opacity 0.25s ${cubicBezier};
  z-index: 10;
`

const Section = styled(Link)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  background-image: ${({ storyid }) =>
    `url(${process.env.PUBLIC_URL}/images/story_${storyid}.png)`};
  background-position: center;
  background-size: cover;
  padding: 1em;
  overflow: hidden;
  &:hover {
    flex-grow: 2;
  }
  @media (min-width: ${BP.tablet}px) {
    &:hover {
      flex-grow: 4;
    }
  }
  text-decoration: none;
  transition: flex-grow 0.25s ${cubicBezier};
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.25s;
  }
  &:hover {
    text-shadow: none;
  }
  &:hover:after {
    opacity: 1;
  }
  &:hover ${SectionBody} {
    height: auto;
    max-height: 1000px;
    opacity: 1;
  }
`

const SectionHeading = styled.h1`
  font-size: 1.25rem;
  z-index: 10;
  text-align: center;
`

const ListenTo = styled.div`
  padding-top: 3em;
  p {
    text-transform: uppercase;
    font-family: ${TYPE.fontFamily.functional};
  }
`

const Overview = () => (
 <div>
  <Wrapper>
    {data.map((s, i) => (
      <Section key={i} storyid={i} to={`/storyplayer/${i}`}>
        <SectionHeading>{s.name}&#39;s Story</SectionHeading>
        <SectionBody>
          <div>{s.blurb}</div>
          <ListenTo>
            <Icon icon="e902" color="white" size="4em" />
            <p>Listen to story</p>
          </ListenTo>
        </SectionBody>
      </Section>
    ))}
  </Wrapper>
  <Footer key="PAGE_FOOTER" backTo="/" />
 </div>
)

export default Overview
