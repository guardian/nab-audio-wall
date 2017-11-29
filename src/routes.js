// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Intro from './components/Intro'
import Overview from './components/Overview'
import StoryPlayerContainer from './containers/StoryPlayerContainer'
import { GetHelp } from './components/GetHelp'

export default (
  <Switch>
    <Route exact path="/" component={Intro} />
    <Route exact path="/overview" component={Overview} />
    <Route path="/storyplayer/:id" component={StoryPlayerContainer} />
    <Route exact path="/get-help" component={GetHelp} />
  </Switch>
)
