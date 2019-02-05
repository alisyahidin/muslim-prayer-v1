import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import App from './components/App/'
import withSetup from './lib/withSetup'
import * as serviceWorker from './serviceWorker'

const Application = withSetup(App)

ReactDOM.render(<Application />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
