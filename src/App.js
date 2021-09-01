import React from "react"
// import PropTypes from "prop-types"
import Home from "./components/sections/Home"
import Header from "./components/elements/Header"
import Footer from "./components/elements/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SearchPage from "./components/sections/SearchPage"
import "./styles/scss/main.scss"

const App = props => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}


export default App;
