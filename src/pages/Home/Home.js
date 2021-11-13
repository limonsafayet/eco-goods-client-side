import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bannerImg from "../../images/banner-home.png"
import useProducts from '../../hooks/useProducts';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import icon1 from "../../images/icon-1.png"
import icon2 from "../../images/icon-3.png"
import icon3 from "../../images/icon-4.png"
import icon4 from "../../images/icon-5.png"
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
                    <Grid item xs={12} sm={12} md={10} lg={6} sx={{ textAlign: "center", margin: "auto", mt: 8 }}>
                        <h1 style={{ color: "green" }}>
                            We love to make your self-care routine simple & easy delivered to your door. At your own timing. And then you smile. This is basically our happy motto.
                            SIMPLE ACTIONS. BIG SMILES :)
                        </h1>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={3}>
                                <img src={icon1} alt="eco goods" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <img src={icon2} alt="eco goods" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <img src={icon3} alt="eco goods" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <img src={icon4} alt="eco goods" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home
