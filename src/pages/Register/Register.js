import { Container, Typography, TextField, Button, CircularProgress, Alert, Card } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import img from "../../images/login-banner.png"
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError, setAuthError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            setAuthError('Your password did not match!')
            return
        }
        else {
            registerUser(loginData.email, loginData.password, loginData.name, history);
            e.preventDefault();
        }

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 12 }} xs={12} md={5}>
                    <Card sx={{ p: 5, textAlign: 'center', boxShadow: 5 }}>
                        <Typography variant="h4" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Card>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;