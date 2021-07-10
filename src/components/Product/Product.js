import React from "react"
import { Box, Card, CardMedia, CardContent, CardActions, CardActionArea,  Typography, } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Product = ({ food }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image={food.strMealThumb}
                    alt={food.title}
                    title={food.title}
                    className={classes.media}
                    />
                    <CardContent mb={2} className={classes.cardContent}>
                        <div className={classes.cardProduct}>
                            <Typography variant="h5" component="h2">
                                {food.title}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {food.price}
                            </Typography>
                        </div>
                        <Typography gutterBottom variant="body3" color="textPrimary" component="p">
                            {food.strMeal}
                        </Typography>
                        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                            {food.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions mt={2} className={classes.cardActions}>
                    <Box component="fieldset" ml={2} mb={0} borderColor="transparent">
                        <Rating name="read-only" value={food.ratings} readOnly />
                    </Box> 
                    <div className={classes.box}>
                        <h3 className={classes.plusSign}>
                            +
                        </h3>
                    </div>
                </CardActions> 
            </Card>
        </>
    );
}

export default Product