import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

import WebLayout from "./layouts/WebLayout";

import PrivateRoute from "./utilities/privateRoute";
import AdminRoute from "./utilities/adminRoute";

import AuthProvider from "./contexts/AuthProvider";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MakeAdmin from "./pages/MakeAdmin/MakeAdmin";
import AddProduct from "./pages/Products/AddProduct";


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
            <AdminRoute exact path="/makeadmin" component={MakeAdmin} />
            <AdminRoute exact path="/add-product" component={AddProduct} />


          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
