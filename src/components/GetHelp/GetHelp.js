// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { Header, Heading } from '../Layout'
import copy from './copy'

import styleVars from '../../styles'

const { COLOURS, TYPE, BP } = styleVars

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 1;
  padding-bottom: 60px;
  background: radial-gradient(ellipse at top, #202c96 0%, #3d2f51 100%);
  background-position: top center;
  color: ${COLOURS.bodyCopy.default};
  flex-wrap: wrap;
  position: relative;
`

const CloseButton = styled(Link)`
  align-self: center;
  justify-self: flex-end;
  text-decoration: none;
  margin-left: auto;
`
const Copy = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  a {
    color: ${COLOURS.bodyCopy.default};
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
  }
`

const GridCell = styled.section`
  font-family: ${TYPE.fontFamily.functional};
  text-align: center;
  padding: 1em;
  @media (min-width: ${BP.tablet}px) {
    max-width: initial;
    flex-basis: 33%;
  }
`
const GetHelp = () => (
  <Wrapper>
    <Header>
      <CloseButton to="/overview">
        <Icon icon="e900" color="white" />
      </CloseButton>
    </Header>
    <Heading>Where to get help</Heading>
    {copy.map((c, i) => (
      <GridCell key={i}>
        <header>
          <h2>{c.title}</h2>
        </header>
        <Copy>{c.text}</Copy>
        <CTA href={c.url || '#'} target="_blank" rel="noopener noreferrer">
          Find out more
        </CTA>
      </GridCell>
    ))}
  </Wrapper>
)

export default GetHelp
