import React from 'react'
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';

import useAuth from '../../hooks/useAuth';

function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const { admin } = useAuth();
    const handleClick = () => {
        setOpen(!open);
    };
    return (

        <div>
            <Toolbar>
                <Typography variant="h6" noWrap component={Link} to="/" sx={{ textDecoration: "none", color: "black" }}>
                    Eco Goods
                </Typography>
            </Toolbar>
            <Divider />
            {admin ?
                <>
                    <List>
                        <ListItem button component={Link} to="/manage-orders">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage All Orders" />
                        </ListItem>
                        <>
                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Product" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }} component={Link} to="/add-product">
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Product" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }} component={Link} to="/manage-products">
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Manage Products" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </>

                    </List>

                    <Divider />
                    <ListItem button component={Link} to="/makeadmin">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Make Admin" />
                    </ListItem>
                </>
                :
                <>
                    <List>
                        <ListItem button component={Link} to="/my-orders">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Orders" />
                        </ListItem>
                        <ListItem button component={Link} to="/pay">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pay" />
                        </ListItem>
                    </List>
                    <Divider />
                    <ListItem button component={Link} to="/review">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Review" />
                    </ListItem>
                </>

            }
        </div>
    )
}

export default Sidebar

