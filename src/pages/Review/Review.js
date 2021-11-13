import { Grid, TextField, Button, Rating } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
function Review() {
    const [rating, setRating] = useState(0);
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //console.log(data);
        const clientRating = rating
        const clientName = user.displayName
        const finalData = { ...data, clientRating, clientName }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/reviews`, finalData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank you',
                        text: 'For your review'
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
                <h2>Give Your Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        label="Review"
                        type="text"
                        {...register("review")}
                        required
                        variant="standard" />
                    <Rating name="size-large" size="large" onChange={e => setRating(e.target.value)} />
                    <Button type="submit" sx={{ mt: 10 }} variant="contained">Submit</Button>
                </form>
            </Grid>
        </Grid>

    )
}

export default Review
