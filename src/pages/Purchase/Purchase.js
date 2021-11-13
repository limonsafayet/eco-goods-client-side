import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
function Purchase({ location: { state } }) {
    const { register, handleSubmit, reset } = useForm();
    const [quantity, setQuantity] = useState(0)
    const { user } = useAuth()

    const onSubmit = data => {
        //console.log(data);
        const totalPrice = calculatePrice()
        const status = false;
        const finalData = { ...data, totalPrice, status }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders`, finalData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You',
                        text: 'For your purchase'
                    })
                    reset();
                    setQuantity(0)
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
    const calculatePrice = () => {
        const price = (parseInt(quantity) * parseInt(state?.price))
        return price
    }
    return (
        <Grid container>
            <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
                <h2>Purchase Your Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Product Name"
                        type="text"
                        {...register("name")}
                        value={state?.name}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Product Quantity"
                        type="number"
                        {...register("quantity")}
                        onChange={e => setQuantity(e.target.value)}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Product Price"
                        type="number"
                        {...register("price")}
                        value={state?.price}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Client Name"
                        type="text"
                        value={user?.displayName}
                        {...register("clientName")}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Client Email"
                        type="text"
                        value={user?.email}
                        {...register("clientEmail")}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Client Phone"
                        type="text"
                        {...register("clientPhone")}
                        required
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Client Address"
                        type="text"
                        {...register("clientAddress")}
                        required
                        variant="standard" />
                    <h2>Total Cost: {quantity != "" ? calculatePrice() : "0"}</h2>
                    <Button type="submit" sx={{ mt: 5 }} variant="contained">Submit</Button>
                </form>
            </Grid>
        </Grid>

    )
}

export default Purchase
