import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert, Card } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from "../../images/login-banner.png"

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    //console.log(process.env.REACT_APP_BACKEND_URL)
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 12 }} xs={12} md={5}>
                    <Card sx={{ p: 5, textAlign: 'center', boxShadow: 5 }}>
                        <Typography variant="h4" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                required
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                required
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1, textAlign: 'center' }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p>Or Sign In With Google</p>
                        <Button onClick={handleGoogleSignIn} variant="contained" color="warning">Google Sign In</Button>
                    </Card>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={img} alt="Eco Goods" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;