import React from 'react';
import './reset.css'
import {Route, Switch} from 'react-router-dom';
import './index.css';

import Landing from './Components/Landing';
import Home from './Components/Home';
import BudgetingInfo from './Components/BudgetingInfo';
import UpdatePassword from './Components/Auth/UpdatePassword';
import Auth from './Components/Auth/Auth';

const App = () => { 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/Home" component={Home}/>
        <Route path="/BudgetingInfo" component={BudgetingInfo}/>
        <Route path="/UpdatePassword" component={UpdatePassword}/>
        <Route path="/Auth" component={Auth}/>
      </Switch>
    </div>
  )
};

export default App;