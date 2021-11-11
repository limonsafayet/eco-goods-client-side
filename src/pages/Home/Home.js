import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bannerImg from "../../images/banner-home.png"

function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <img src={bannerImg} style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home
