import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bannerImg from "../../images/banner-home.png"
import useProducts from '../../hooks/useProducts';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
function Home() {
    const [productsData] = useProducts();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={12}>
                    <img src={bannerImg} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <h1 style={{ textAlign: "center" }}>Our Eco-friendly Products</h1>
                    <Grid container>
                        {
                            productsData.slice(0, 6).map(product => <SingleProduct
                                key={product._id}
                                product={product}
                            />)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home
