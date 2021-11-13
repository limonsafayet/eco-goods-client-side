import { Button, TextField, Alert, Grid } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (

        <Grid container>
            <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
                <h2>Make an Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        required
                        variant="standard" />
                    <Button type="submit" sx={{ mt: 2 }} variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success" sx={{ mt: 2 }}>Made Admin successfully!</Alert>}
            </Grid>
        </Grid>

    );
};

export default MakeAdmin;