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
import ManageProducts from "./pages/Products/ManageProducts";
import Products from "./pages/Products/Products";
import Purchase from "./pages/Purchase/Purchase";
import MyOrders from "./pages/MyOrders/MyOrders";
import Pay from "./pages/Pay/Pay";
import ManageOrders from "./pages/ManageOrders.js/ManageOrders";
import Review from "./pages/Review/Review";


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
            <WebRoute exact path="/products" component={Products} />
            <WebRoute exact path="/login" component={Login} />
            <WebRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/purchase" component={Purchase} />
            <PrivateRoute exact path="/my-orders" component={MyOrders} />
            <PrivateRoute exact path="/pay" component={Pay} />
            <PrivateRoute exact path="/review" component={Review} />

            <AdminRoute exact path="/makeadmin" component={MakeAdmin} />
            <AdminRoute exact path="/add-product" component={AddProduct} />
            <AdminRoute exact path="/manage-products" component={ManageProducts} />
            <AdminRoute exact path="/manage-orders" component={ManageOrders} />


          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
