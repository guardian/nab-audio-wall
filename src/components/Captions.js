// @flow
/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

const UI = styled.div`
  visibility: ${({ showCaptions }) => (showCaptions ? 'visible' : 'hidden')};
  font-style: italic;
  position: relative;
  z-index: 1;
  height: 45vh;
  overflow: auto;
  margin-bottom: 2rem;
  line-height: 1.5em;
  padding-top: 1em;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  /* NOTE: Clipping masks and image wipes
  https://css-tricks.com/clipping-masking-css/
  https://css-tricks.com/webkit-image-wipes/
*/
  -webkit-mask-image: -webkit-gradient(
    linear,
    center top,
    center bottom,
    color-stop(0, rgba(0, 0, 0, 0)),
    color-stop(0.1, rgba(0, 0, 0, 1)),
    color-stop(0.9, rgba(0, 0, 0, 1)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`
const Child = styled.div`
  font-size: 0.8rem;
  line-height: 1.25rem;
`

type PropsT = {
  showCaptions: boolean,
  scrollDuration: number
};
class Captions extends Component<PropsT, *> {
  componentDidMount() {
    this.nodeDOMEl = document.querySelector(
      `.${this.node.state.generatedClassName}`
    )
    this.scrollHeight = this.nodeDOMEl && this.nodeDOMEl.scrollHeight

    // console.info(this.nodeDOMEl)
    // setInterval(() => {
    /*   this.nodeDOMEl.scrollTo(0, this.scrollHeight /
      this.props.scrollDuration) console.info('stuff') }, 250) */
    // this.nodeDOMEl.scrollTop = 0
  }
  componentDidUpdate() {}
  nodeDOMEl = {}
  scrollHeight = 0
  node = {}
  render() {
    return (
      <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
        {style => (
          <UI
            style={{ opacity: style.opacity }}
            ref={el => {
              this.node = el
            }}
            {...this.props}
          >
            <Child>{this.props.children}</Child>
          </UI>
        )}
      </Motion>
    )
  }
}

export default Captions
