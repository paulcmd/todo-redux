import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import TodoApp from './components/TodoApp'
//import reducer from './reducer'
import 'normalize.css/normalize.css'
import './styles/styles.scss'



ReactDOM.render(
    <Provider store={store} >
        <TodoApp />
    </Provider>,
    document.getElementById('app')
)
