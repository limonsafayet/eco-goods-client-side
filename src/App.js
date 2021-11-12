import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/Home/Home";

function App() {

  const WebRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      <WebLayout>
        <Component {...props} />
      </WebLayout>
    )}>
    </Route>
  )

  return (
    <>
      <Router>
        <Switch>
          <WebRoute exact path="/" component={Home} />
          <DashboardLayout>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </DashboardLayout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
