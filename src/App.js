import { Header } from "../src/client/components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../src/client/containers/Home/Home";
import { About } from "../src/client/containers/About/About";
import { Projects } from "../src/client/containers/Projects/Projects";
import { Contact } from "../src/client/containers/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <About exact path="/about" />
            <Projects exact path="/projects" />
            <Contact exact path="/contact" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
