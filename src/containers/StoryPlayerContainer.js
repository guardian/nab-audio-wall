/* eslint-disable no-unused-vars */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StoryPlayer from '../components/StoryPlayer'
import * as actions from '../redux/actions/actionCreators'

function mapStateToProps(state) {
  const { appState } = state.appReducer
  return {
    isMuted: appState.isMuted,
    isPlaying: appState.isPlaying
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMute: bindActionCreators(actions.toggleMute, dispatch),
    togglePause: bindActionCreators(actions.togglePause, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPlayer)
