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

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <GuardedRoute {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}>
    </GuardedRoute>
  )

  return (
    <>
      <Router>
        <Switch>
          {/* <WebLayout>
            <Route exact path="/">
              <Home />
            </Route>
          </WebLayout> */}
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
