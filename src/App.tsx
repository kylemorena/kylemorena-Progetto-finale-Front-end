import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps
} from "react-router-dom"; 
import routes from 'routes/routes'
import AuthControl from "services/auth";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((res,index)=> { return (
          <Route key={index} exact={res.exact} path={res.path} render={(routeProps:RouteComponentProps<any> )=>{
            if(res.protected){
              return <AuthControl {...routeProps}/>;
            }
            return <res.component />
          }}/>
        )})}
      </Switch>
    </Router>
  );
}

export default App;
