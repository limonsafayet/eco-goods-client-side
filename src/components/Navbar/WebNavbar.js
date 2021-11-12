import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../images/EcoGoods.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
function Navbar() {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'text.primary' }}>
                <Toolbar>
                    <Box component={Link} to="/" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="EcoGoods" />
                    </Box>
                    <Button color="inherit" component={Link} to="/products" sx={{ marginRight: "-.6rem" }}>products</Button>
                    {
                        user?.email ?
                            <>
                                <Button color="inherit" component={Link} to="/dashboard" sx={{ marginRight: "-1.5rem" }}>Dashboard</Button>
                                <Button color="inherit" onClick={logout} sx={{ marginRight: "-1.5rem" }}> <LogoutIcon /></Button>
                            </>
                            : <Button color="inherit" component={Link} to="/login">Login</Button>

                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
