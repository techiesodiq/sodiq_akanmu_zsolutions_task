import React, { useState, useEffect } from 'react'
import { Box, Grid, Button, } from '@material-ui/core';
import axios from "axios"
import Product from "../Product/Product"
import LoadingProgressLabel from "./LoadingProgressLabel";
import useStyles from "./styles"


const Products = () => {
    const classes = useStyles();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(10);

    const API_URL = "https://asm-dev-api.herokuapp.com/api/v1/food"

    const fetchData = async () => {
      try {
        const request = await axios.get(API_URL);
        const neededData = request.data.data.meals;
        setFoods(neededData);
        setLoading(false);
        console.log(neededData);
        return neededData;
      } 
      catch (error) {
        console.log(error)
        setError(error)
      }
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    if (loading) {
      return (
        <div className={classes.message}>
          <LoadingProgressLabel value={progress} />
        </div>
      ) 
    }

    if (error) {
      return (
        <div className={classes.message}>
          <h1>{error.message}</h1> 
        </div>
      ) 
    }
    

    return (
      <main>
        <div className={classes.majorRoot}>   
            <Grid container spacing={1} className={classes.container}>
              {foods.map((food) => (
                <Grid key={food.id} item xs={12} sm={6} md={4} lg={4} spacing={0} className={classes.containerItem}>
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
