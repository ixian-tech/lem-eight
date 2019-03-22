import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"

function reducer(state, action) {
    console.log("reducer", state, action)
    return state
}

const store = createStore(
    reducer,
    composeWithDevTools()
    // applyMiddleware(...reduxThunk)
    // other store enhancers if any
)

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
