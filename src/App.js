import React from 'react';
import Header from './components/Header';
import Body from "./components/Body.js"
import "./css/App.css"
import background from "./background.jpeg"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
