import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

/* Styles */
import { globalStyles } from '../styles'

globalStyles

/* Constants */
import { BP } from '../styles'

/* Layout */

/* Components */
import Overview from '../components/Overview'

storiesOf('Main Components', module).add('Overview', () => <Overview />)
