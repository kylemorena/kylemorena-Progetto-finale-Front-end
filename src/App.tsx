import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Home from './pages/home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route path="/about" />
        <Route path="/topics" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Switch>
    </Router>
  );
}

export default App;
