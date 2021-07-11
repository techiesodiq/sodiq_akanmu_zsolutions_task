import React from "react"
import { Box, Card, CardMedia, CardContent, CardActions, CardActionArea,  Typography, } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Product = ({ food }) => {
    const classes = useStyles();

    const shortDescription = (description) => {
        return (description.split(" ").splice(0, 13).join(" ") + " and more...") 
    }

    const formatPrice = (price) => {
        return ((price.slice(1)) +"$")
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea className={classes.cardActionArea}>
                    <CardMedia
                    component="img"
                    image={food.strMealThumb}
                    alt={food.title}
                    title={food.title}
                    className={classes.media}
                    height="195px"
                    maxWidth="300px"
                    // width="max-content"
                    />
                    <CardContent mb={2} className={classes.cardContent}>
                        <div className={classes.cardProduct}>
                            <Typography variant="h6" component="h6" className={classes.title}>
                                {food.title}
                            </Typography>
                            <Typography variant="h6" component="h6" className={classes.title}>
                                {formatPrice(food.price)}
                            </Typography>
                        </div>
                        <Typography gutterBottom variant="body3" color="textPrimary" component="p">
                            {food.strMeal}
                        </Typography>
                        <Typography className={classes.description} variant="body3" color="textSecondary" component="p" onClick={handleClick}>
                            {shortDescription(food.description)}
                        </Typography>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                            <Typography className={classes.typography}>{food.description}</Typography>
                        </Popover>
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