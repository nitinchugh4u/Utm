import React from "react";
import Item from "./Item";
import { Grid } from '@mui/material'
import "./Item.css"
// import Item from "./Item";

const UI2 = () => {
  return (
    <>
    <Grid className="MainGrid"  container spacing={2}>
  <Grid className="Grid" item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid className="Grid" item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid className="Grid" item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid className="Grid" item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
</Grid>
      
      
        
        
    </>
  );
};

export default UI2;
