import { Grid, Table, Button, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import useProducts from '../../hooks/useProducts';
import DeleteIcon from '@mui/icons-material/Delete';
function ManageProducts() {
    const [productsData, setProductsData] = useProducts();
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
                axios.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Product has been deleted.',
                            'success'
                        )
                        setProductsData(productsData.filter(item => item._id !== id));
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
            <Grid item xs={12} md={12} lg={10} sx={{ margin: "auto" }}>
                <h2>Manage Products</h2>
                <Table sx={{ boxShadow: 5 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsData.map((product, index) =>
                            <TableRow key={product._id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell><img src={product.image} alt={product.name} style={{ width: "150px" }} /></TableCell>
                                <TableCell><Button variant="contained" color="error" onClick={() => handleDelete(product._id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default ManageProducts
