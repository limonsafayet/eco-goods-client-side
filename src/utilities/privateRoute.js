import React from 'react';
import { CircularProgress } from '@mui/material';
import { Redirect, Route } from 'react-router';
import useAuth from "../hooks/useAuth"
import DashboardLayout from '../layouts/DashboardLayout';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={props => user.email ? <DashboardLayout><Component {...props} {...rest} /></DashboardLayout> : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;