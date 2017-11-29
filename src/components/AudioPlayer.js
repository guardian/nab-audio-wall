// @flow
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable */
import React, { Component } from 'react'

const { PUBLIC_URL } = process.env

type AudioElT = {|
  removeAttribute: (any: string) => void,
  load: () => void,
  play: () => void,
  pause: () => void,
  currentSrc: string,
  currentTime: number,
  duration: number,
  muted: boolean
|}

type PropsT = {|
  audioFormats: Array<string>,
  story: string,
  chapter: number,
  isMuted: boolean,
  isPlaying: boolean,
  getAudioDuration: (duration: number) => number
|}

type StateT = {|
  currentTime: number
|}

class AudioPlayer extends Component<PropsT, StateT> {
  state = {
    currentTime: (this.audioEl && this.audioEl.played) || 0
  }

  componentDidMount() {
    const audio = this.audioEl

    audio.addEventListener('error', e => {
      console.error('error', e)
    })

    // When enough of the file has downloaded to start playing
    audio.addEventListener('canplay', () => {
      // audio.play()
    })

    // audio.muted = false
    // this.props.getAudioDuration(audio.duration)
  }

  /**
   * Set an interval to call props.onListen every
   * props.listenInterval time period
   */
  setListenTrack() {
    if (!this.listenTracker) {
      const { listenInterval } = this.props
      this.listenTracker = setInterval(() => {
        this.props.onListen(this.audioEl.currentTime)
        console.info(this.audioEl.currentTime)
      }, listenInterval)
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    /* NOTE: https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery#Other_tips_for_audiovideo */
    /* only destroy and replay audio when chapter changes */
    if (nextProps.chapter !== this.props.chapter) {
      this.audioEl.removeAttribute('src')
      this.audioEl.load()
      // this.audioEl.play()
    }
    if (nextProps.isMuted !== this.props.isMuted)
      this.audioEl.muted = this.props.isMuted
    if (nextProps.isPlaying !== this.props.isPlaying) {
      this.switchPlayerState(nextProps.isPlaying)
    }
  }

  componentDidUpdate() {
    this.audioEl.muted = this.props.isMuted
    console.info('[scrollDuration]', this.audioEl.duration)
  }

  componentWillUnmount() {
    this.audioEl.removeAttribute('src')
    this.audioEl.load()
    console.info('audio player removed')
  }

  switchPlayerState = (isPlaying: boolean) => {
    if (isPlaying === true) {
      this.audioEl.play()
      console.info(`isPlaying: ${isPlaying}`)
    } else {
      this.audioEl.pause()
      console.info(`isPlaying: ${isPlaying}`)
    }
  }

  audioEl: AudioElT

  render() {
    const { story, chapter, audioFormats } = this.props
    return (
      <audio
        ref={el => {
          this.audioEl = el
        }}
      >
        {audioFormats.map((format, index) => (
          <source
            src={`${PUBLIC_URL || ''}/audio/${story}_${chapter}.${format}`}
            key={`audioSource_${index}`}
          />
        ))}
      </audio>
    )
  }
}
export default AudioPlayer
