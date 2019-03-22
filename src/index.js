import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {
    count: 0,
    todos: [{ task: "Get work done" }]
}
function reducer(state = initialState, action) {
    console.log("reducer", state, action)

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                todos: state.todos
            }
        case "DECREMENT":
            return {
                count: state.count - 1,
                todos: state.todos
            }
        case "RESET":
            return {
                count: 0,
                todos: state.todos
            }

        default:
            return state
    }

    if (action.type === "INCREMENT") {
        return {
            count: state.count + 1
        }
    } else if (action.type === "RESET") {
    }
    return state
}

const store = createStore(reducer, composeWithDevTools())

console.log(store.getState())

store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "DECREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "DECREMENT" })

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
