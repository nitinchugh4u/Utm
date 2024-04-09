import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";
import "./Item.css";

const UI5 = () => {
  return (
    <>

    

<Grid className="MainGrid" container spacing={2} columns={16}>
  <Grid className="Grid" item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid className="Grid" item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
    
   

    </>
  );
};

export default UI5;
















<Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>