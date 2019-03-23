import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducer'
import {Provider} from 'react-redux'
import App from './App'

let store =createStore(reducer)

render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,
    document.querySelector("#container")
)