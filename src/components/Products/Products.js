import React, { useState, useEffect } from 'react'
import { Box, Grid, Button, } from '@material-ui/core';
import axios from "axios"
import Product from "../Product/Product"
import useStyles from "./styles"


const Products = () => {
    const classes = useStyles();
    const [foods, setFoods] = useState([]);
    const apiURL = "https://asm-dev-api.herokuapp.com/api/v1/food"

    const fetchData = async () => {
        const request = await axios.get(apiURL);
        const neededData = request.data.data.meals;
        setFoods(neededData);
        console.log(neededData);
        return neededData;
    }

    useEffect(() => {
        fetchData()
    }, [])
    

    return (
      <main>
        <div className={classes.majorRoot}>   
            <Grid container spacing={4}>
              {foods.map((food) => (
                <Grid key={food.id} container item xs={12} sm={6} md={4} lg={4} spacing={1} >
                    <Product food={food} />
                </Grid>
              ))}
            </Grid>
            <Box className={classes.buttonBox} mt={4}>
                <Button size="medium" variant="contained" className={classes.button}>
                    Learn More
                </Button>
            </Box>
        </div>
      </main>
    )
}

export default Products
