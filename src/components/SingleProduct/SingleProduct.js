import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function SingleProduct({ product }) {
    const { name, price, image, description } = product;
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ p: 3 }}>
            <Card sx={{ boxShadow: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        sx={{ height: "300px" }}
                        image={image}
                        alt={name} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="h6" sx={{ mt: 2 }} component="div">
                            Price: {price}
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <CardActions>
                    <Link to={{
                        pathname: `/purchase`,
                        state: product
                    }} className="decorNone">
                        <Button variant="outlined" color="primary">
                            Buy Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default SingleProduct
