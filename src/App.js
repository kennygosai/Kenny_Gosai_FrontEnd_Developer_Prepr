import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Router, Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Explore from "./Kenny_Gosai_FrontEnd_Developer_Components/Explore/Kenny_Gosai_FrontEnd_Developer_index";
import MyProject from "./Kenny_Gosai_FrontEnd_Developer_Components/myProjects/Kenny_Gosai_FrontEnd_Developer_index"
import Challenges from "./Kenny_Gosai_FrontEnd_Developer_Components/Challenges/Kenny_Gosai_FrontEnd_Developer_index";
import ChallengeDisplay from './Kenny_Gosai_FrontEnd_Developer_Components/ChallengeDisplay/Kenny_Gosai_FrontEnd_Developer_index'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Kenny_Gosai_FrontEnd_Developer_Prepr" component={Explore} />
          <Route exact path="/Kenny_Gosai_FrontEnd_Developer_Prepr/myProjects" component={MyProject} />
          <Route exact path="/Kenny_Gosai_FrontEnd_Developer_Prepr/challenge" component={Challenges} />
          <Route exact path="/Kenny_Gosai_FrontEnd_Developer_Prepr/challengeManager/front-end-developer-work-challenge" component={ChallengeDisplay} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
