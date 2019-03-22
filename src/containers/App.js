import React, { Component } from "react"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"

import "./App.module.css"

class App extends Component {
    render() {
        return (<Router>
            <Route path="/" exact component={} />
        </Router>)
    }
}

export default App
