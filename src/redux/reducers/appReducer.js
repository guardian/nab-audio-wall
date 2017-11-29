// @flow
import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes'

type ActionT = {
  +type: string,
  +payload: string
}

type appStateT = {
  isMuted: boolean,
  isPlaying: boolean
}

const initialState = {
  isMuted: false,
  isPlaying: false
}

export function appState(state: appStateT = initialState, action: ActionT) {
  switch (action.type) {
    case types.TOGGLE_MUTE:
      return Object.assign({}, state, {
        isMuted: !state.isMuted
      })
    case types.TOGGLE_PAUSE:
      return Object.assign({}, state, {
        isPlaying: !state.isPlaying
      })

    default:
      return state
  }
}

export default combineReducers({
  appState
})
