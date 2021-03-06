import { Grid, Table, Button, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ManageOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders`)
            .then(res => setOrders(res.data))
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${process.env.REACT_APP_BACKEND_URL}/orders/${id}`)
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Orders has been deleted.',
                            'success'
                        )
                        setOrders(orders.filter(item => item._id !== id));
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!'
                        })
                    })

            }
        })
    }

    const handleEdit = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont to update the status",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`${process.env.REACT_APP_BACKEND_URL}/orders/${id}`)
                    .then(res => {
                        Swal.fire(
                            'Updated!',
                            'Status has been updated.',
                            'success'
                        )
                        setOrders(orders.filter(item => (item._id == id) ? item.status = ((item.status == "true") ? "false" : "true") : item));

                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!'
                        })
                    })

            }
        })
    }
    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12} sx={{ margin: "auto" }}>
                <h2>My Orders</h2>
                <Table sx={{ boxShadow: 5 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Client</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, index) =>
                            <TableRow key={order._id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{order.name}</TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell>{order.price}</TableCell>
                                <TableCell>{order.totalPrice}</TableCell>
                                <TableCell>{order.clientName}</TableCell>
                                <TableCell>{order.clientEmail}</TableCell>
                                <TableCell>{order.clientPhone}</TableCell>
                                <TableCell>{order.clientAddress}</TableCell>
                                <TableCell>{order.status == "true" ? <Button variant="outlined" color="success">Shipped</Button> : <Button variant="outlined" color="warning">Pending</Button>}</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={() => handleEdit(order._id)}><EditIcon /> Status</Button>
                                    <Button variant="contained" sx={{ ml: 1 }} color="error" onClick={() => handleDelete(order._id)}><DeleteIcon /></Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default ManageOrders
