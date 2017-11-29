import * as types from './actionTypes'

export function exampleActionCreator() {
  return {
    type: types.EXAMPLE_ACTION
  }
}

export function toggleStory(storyid) {
  return {
    type: types.TOGGLE_STORY,
    payload: storyid
  }
}

export function toggleMute() {
  return {
    type: types.TOGGLE_MUTE
  }
}

export function togglePause() {
  return {
    type: types.TOGGLE_PAUSE
  }
}
