import React from "react";
import Login from "./Login"
import Navbar from "./Navbar"
import About from "./About"
import Home from "./Home"
import { Route, Switch } from "react-router-dom"


const App = () => {
  return (
    <div>
      <Navbar />
    <Switch>
    <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
    )
}
export default App