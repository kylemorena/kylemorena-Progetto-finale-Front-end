import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps
} from "react-router-dom"; 
import routes from 'routes/routes'
import AuthControl from "helper/auth";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((res,index)=> { return (
          <Route key={index} exact={res.exact} path={res.path} render={(routeProps:RouteComponentProps<any> )=>{
            //FIXME: megliorare l'AuthControl, magari spostare il controllo dell' auth.currentUser qui
            if(res.protected){
              return <AuthControl {...routeProps}> <res.component/> </AuthControl>;
            }
            return <res.component />
          }}/>
        )})}
      </Switch>
    </Router>
  );
}

export default App;
