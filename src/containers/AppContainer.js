/* eslint-disable no-unused-vars */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as actions from '../redux/actions/actionCreators'

function mapStateToProps(state) {
  return {
    isMuted: state.isMuted
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMute: bindActionCreators(actions.toggleMute, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
