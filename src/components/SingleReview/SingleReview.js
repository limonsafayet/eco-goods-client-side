
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import React from 'react'


function SingleReview({ clientReview }) {
    const { review, clientRating, clientName } = clientReview;
    return (
        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ p: 3 }}>
            <Card sx={{ boxShadow: 5, textAlign: "center" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {review}
                        </Typography>
                        <Rating name="disabled" value={parseInt(clientRating)} readOnly />
                        <Typography gutterBottom variant="h6" sx={{ mt: 2 }} component="div">
                            {clientName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default SingleReview
