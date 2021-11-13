import React from 'react'
import { AppBar, Grid } from '@mui/material'

function Footer() {
    return (
        <footer>
            <AppBar position="static" color="success" sx={{ mt: 10 }} >
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} sx={{ margin: "auto" }} >

                        <h2 style={{ textAlign: "center" }}>
                            © 2021 Eco Goods
                        </h2>

                    </Grid>
                </Grid>
            </AppBar>
        </footer>
    )
}

export default Footer
