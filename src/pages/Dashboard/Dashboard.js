import React from 'react'
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';


function Dashboard() {
    const { user } = useAuth();
    return (
        <>
            <Typography variant="h4">
                Hi <span style={{ color: "green" }}><b> {user.displayName}</b></span> Welcome to Eco Goods.
            </Typography>


        </>
    )
}

export default Dashboard
