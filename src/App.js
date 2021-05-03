import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Home from './components/pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
        </Route>
        <Route path="/topics">
        </Route>
        <Route path="/signin">
        </Route>
        <Route path="/signup">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
