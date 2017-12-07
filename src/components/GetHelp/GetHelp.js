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
  font-size: 0.8rem;
  line-height: 1.25rem;
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

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const GridCell = styled.section`
  font-family: ${TYPE.fontFamily.functional};
  text-align: center;
  padding: 1em;
  @media (min-width: ${BP.tablet}px) {
    width: 33.333%;
  }
`

const GetHelp = () => (
  <Wrapper>
    <Header>
      <CloseButton to="/overview">
        <Icon icon="e900" color="white" />
      </CloseButton>
    </Header>
    <Heading style={{ margin: "0.67em 0" }}>Where to get help</Heading>
	<div style={{ width: "100%" }}>
    <p style={{ padding: "20px", textAlign: "center", maxWidth: "960px", display: "block", margin: "0 auto", fontFamily: "'Guardian Agate Sans', sans-serif", fontSize: "0.8rem", lineHeight: "1.25rem" }}>
		This content has been brought to you by NAB,
		who is playing an active role in raising awareness
		and providing critical support to help see an end
		to domestic and family violence in our communities.<br />
		<a href="https://www.nab.com.au/about-us/corporate-responsibility/customers/domestic-and-family-violence?own_cid=shortURL:endtoviolence" style={{ color: "white", textDecoration: "underline" }}>nab.com.au/endtoviolence</a>
    </p>
    </div>
    <GridContainer>
    {copy.map((c, i) => (
      <GridCell key={i}>
        <header>
          <h2 style={{ margin: "0.83em 0" }}>{c.title}</h2>
        </header>
        <Copy>{c.text}</Copy>
        <CTA href={c.url || '#'} target="_blank" rel="noopener noreferrer">
          Find out more
        </CTA>
      </GridCell>
    ))}
    </GridContainer>
  </Wrapper>
)

export default GetHelp
