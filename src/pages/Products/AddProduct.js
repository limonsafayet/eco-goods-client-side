import { Grid, TextField, Button } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
function AddProduct() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //console.log(data);

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Product has been created'
                    })
                    reset();
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }
    return (
        <Grid container>
            <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Product Name"
                        type="text"
                        {...register("name")}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Product Description"
                        type="text"
                        {...register("description")}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Product Price"
                        type="number"
                        {...register("price")}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Product Image"
                        type="text"
                        {...register("image")}
                        required
                        variant="standard" />
                    <Button type="submit" sx={{ mt: 5 }} variant="contained">Submit</Button>
                </form>
            </Grid>
        </Grid>

    )
}

export default AddProduct
