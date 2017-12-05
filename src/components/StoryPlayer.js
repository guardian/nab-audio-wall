// @flow
/* eslint no-console: 0 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import AudioPlayer from './AudioPlayer'
import Playlist from './Playlist'
import Captions from './Captions'
import { Footer } from '../components/Layout'

import styleVars from '../styles'
import data from '../data'

type State = {|
  activeChapter: number,
  captionsVisible: boolean,
  duration: number,
  activeSection: number
|};

type Props = {|
  match: Object,
  isMuted: boolean,
  isPlaying: boolean,
  toggleMute: () => void,
  togglePause: () => void
|};

const { TYPE } = styleVars
const { PUBLIC_URL } = process.env
const Wrapper = styled.div`
  background-image: ${({ storyid }) =>
    `url(${PUBLIC_URL || ''}/images/story_${storyid}.png`});
    background-position: center;
    background-color: rgba(0,0,0,.25);
    background-size: cover;
    height: 100%;
    width: calc(100% - 40px);
    margin: 20px auto;
    color: white;
    text-align: center;
    position: relative;
    padding: 1rem;
    margin-bottom: 84px;
    max-height: 100%;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  & > ${Icon}, a {
    position: absolute;
    z-index: 10;
  }
  & > ${Icon} {
    right: 1.5rem;
  }
  a {
    right: 0;
  }
`
const SectionHeading = styled.h1`
  font-family: ${TYPE.fontFamily.functional};
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  margin: 0 0 0.5rem;
  z-index: 1;
`
const SectionChapter = styled.h2`
  font-family: ${TYPE.fontFamily.functional};
  font-size: 0.75rem;
  position: relative;
  margin: 0;
  z-index: 1;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  z-index: 0;
`
const PlayControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  ${Icon} {
    cursor: pointer;

    &:nth-child(2) {
      border-radius: 50%;
      border: #fff solid 2px;
      font-size: 1.5em;
      margin: 0 1rem;
      padding: 0.75em;

      &[icon="e90f"]::after {
        transform: translatex(0.0625em);
      }
    }

    &::after {
      display: block;
      line-height: 1;
      width: 1em;
    }
  }
`

const playListVisible = false

class StoryPlayer extends Component<Props, State> {
  state = {
    activeChapter: 0,
    captionsVisible: true,
    duration: 0,
	activeSection: this.props.match.params.id
  }

  handlePlayerMute = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    /* dispatch mute action */
    return this.props.toggleMute()
  }

  handlePlayerPause = () => this.props.togglePause()

  handlePlayerPrevious = () => {
    if (this.state.activeChapter > 0) {
      if (this.props.isPlaying === true) {
        this.props.togglePause()
      }
      this.setState({
        activeChapter: this.state.activeChapter - 1
      })
    }
    else
    {
		const prevStory = parseInt(this.props.match.params.id, 10) - 1;
		if (prevStory >= 0) {
			const newLocation = `#/storyplayer/${prevStory}`;
			window.location.href = newLocation;
			this.setState({
			  activeChapter: 3,
			  activeSection: prevStory
			});
		}
    }
  }

  handlePlayerNext = () => {
/* check that we are on the final chapter and prevent
      increasing the activeChapter value if true
    */
    if (
      this.state.activeChapter <
      data[this.props.match.params.id].chapters.length - 1
    ) {
      /* on next chapter, toggle app state back to paused
        this will reset the play/pause button to default
      */
      if (this.props.isPlaying === true) {
        this.props.togglePause()
      }
      this.setState({
        activeChapter: this.state.activeChapter + 1
      })
    }
    else
    {
		if (this.props.isPlaying === true) {
        	this.props.togglePause()
      	}
		const nextStory = parseInt(this.props.match.params.id, 10) + 1;
		if (nextStory < 4) {
			const newLocation = `#/storyplayer/${nextStory}`;
			window.location.href = newLocation;
			this.setState({
			  activeChapter: 0,
			  activeSection: nextStory,
			});
		}
    }
  }
  handleToggleCaptions = () =>
    this.setState({ captionsVisible: !this.state.captionsVisible })

  handleGetAudioDuration = (duration: number) => {
    this.setState({
      duration
    })
  }

  handleOnEnded = () => {
    this.handlePlayerNext()
  }

  handleCanPlay = () => {
    this.handlePlayerPause()
  }

  render() {
    const { isMuted } = this.props
    const { match } = this.props
    const activeSection = match.params.id
    const currentStory = data[activeSection].chapters[this.state.activeChapter]
    if (!activeSection) {
      return <div>Section not found</div>
    }
    return [
      <Wrapper storyid={activeSection} key="PAGE_WRAPPER">
        <Header>
          <SectionHeading>
            {data[activeSection].name}&#39;s Story <br />
          </SectionHeading>
          <SectionChapter>
            Chapter {this.state.activeChapter + 1}
          </SectionChapter>
          <Icon
            icon={this.state.captionsVisible ? 'e908' : 'e907'}
            size="1rem"
            color="white"
            onClick={this.handleToggleCaptions}
            isInteractive
            style={{ top: 0 }}
          />
          <Link to="/overview" style={{ textDecoration: 'none', top: 0 }}>
            <Icon icon="e900" color="white" />
          </Link>
        </Header>
        <Captions
          showCaptions={this.state.captionsVisible}
          scrollDuration={this.state.duration}
        >
          {currentStory.map((individualStory, i) => (
            <p key={`story-para-${i}`}>{individualStory}</p>
          ))}
        </Captions>
        <PlayControls>
          <Icon
            icon="e90d"
            size="1rem"
            color="white"
            isInteractive
            onClick={this.handlePlayerPrevious}
          />
          <Icon
            icon={this.props.isPlaying ? 'e90e' : 'e90f'}
            size="1.5rem"
            color="white"
            isInteractive
            onClick={this.handlePlayerPause}
          />
          <Icon
            icon="e90c"
            size="1rem"
            color="white"
            isInteractive
            onClick={this.handlePlayerNext}
          />
        </PlayControls>
        <Mask opacity="0.3" color="black" />
      </Wrapper>,
      <Footer
        key="PAGE_FOOTER"
        backTo='/overview'
      />,
      playListVisible && <Playlist key="PLAYLIST" />,
      <AudioPlayer
        key="AUDIO_PLAYER"
        audioFormats={['mp3']}
        chapter={this.state.activeChapter + 1}
        story={this.state.activeSection}
        isMuted={isMuted}
        isPlaying={this.props.isPlaying}
        getAudioDuration={this.handleGetAudioDuration}
        listenInterval={1000}
		endedCallback={this.handleOnEnded}
		canPlayCallback={this.handleCanPlay}
      />
    ]
  }
}

export default StoryPlayer
