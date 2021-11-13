import { Grid, Box } from '@mui/material'
import React from 'react'
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import useProducts from '../../hooks/useProducts'
function Products() {
    const [productsData] = useProducts();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={12}>
                    <h1 style={{ textAlign: "center" }}>Our Eco-friendly Products</h1>
                    <Grid container>
                        {
                            productsData.map(product => <SingleProduct
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

export default Products
