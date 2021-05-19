import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage/main-page.component";
import Episodes from "./components/Episodes/episodes.component";
import Characters from "./components/ActorsAndCharacters/characters.component";
import Actors from "./components/ActorsAndCharacters/actors.component";
import Info from "./components/Info/info.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={MainPage}/>
          <Route path="/episodes" component={Episodes}/>
          <Route path="/characters" component={Characters}/>
          <Route path="/actors"  component={Actors}/>
          <Route path="/info" component={Info}/>
        </div>
      </Router>
    );
  }
}

export default App;

