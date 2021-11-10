import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <DashboardLayout>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </DashboardLayout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
