import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Explore from "./Kenny_Gosai_FrontEnd_Developer_Components/Kenny_Gosai_FrontEnd_Developer_Explore/Kenny_Gosai_FrontEnd_Developer_index";
import MyProject from "./Kenny_Gosai_FrontEnd_Developer_Components/Kenny_Gosai_FrontEnd_Developer_myProjects/Kenny_Gosai_FrontEnd_Developer_index";
import Challenges from "./Kenny_Gosai_FrontEnd_Developer_Components/Kenny_Gosai_FrontEnd_Developer_Challenges/Kenny_Gosai_FrontEnd_Developer_index";
import ChallengeDisplay from "./Kenny_Gosai_FrontEnd_Developer_Components/Kenny_Gosai_FrontEnd_Developer_ChallengeDisplay/Kenny_Gosai_FrontEnd_Developer_index";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/Kenny_Gosai_FrontEnd_Developer_Prepr"
            component={Explore}
          />
          <Route
            exact
            path="/Kenny_Gosai_FrontEnd_Developer_Prepr/myProjects"
            component={MyProject}
          />
          <Route
            exact
            path="/Kenny_Gosai_FrontEnd_Developer_Prepr/challenge"
            component={Challenges}
          />
          <Route
            exact
            path="/Kenny_Gosai_FrontEnd_Developer_Prepr/challengeManager/front-end-developer-work-challenge"
            component={ChallengeDisplay}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
