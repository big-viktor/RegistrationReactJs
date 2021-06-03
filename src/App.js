import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PageHello from './componets/pageHello/pageHello';
import pageRegistrations from './componets/pageRegistrations/pageRegistrations';
import pageLog from './componets/pageLog/pageLog';
import PageGreeting from './componets/PageGreeting/PageGreeting';
import './App.css';

function App() {
  return (
    <Router>
    <div className="wraper">
     <Switch>
       <Route path="/Regis" component={pageRegistrations}/>
       <Route exact  component={PageHello} path='/'/>
       <Route component={pageLog} path='/Log'  />
       <Route component={PageGreeting} path='/Greet' />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
