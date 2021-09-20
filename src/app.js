import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore, compose } from 'redux'

import IndecisionApp from './components/IndecisionApp'
//import reducer from './reducer'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhancers())

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))
