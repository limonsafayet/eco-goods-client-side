import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import AuthProvider from "./contexts/AuthProvider";
import Register from "./pages/Register/Register";
import PrivateRoute from "./utilities/privateRoute";

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
      <AuthProvider>
        <Router>
          <Switch>
            <WebRoute exact path="/" component={Home} />
            <WebRoute exact path="/login" component={Login} />
            <WebRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
