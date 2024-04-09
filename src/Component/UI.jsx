import React from "react";
import Item from "./Item";
import { Grid } from '@mui/material'
import "./Item.css"

const UI = () => {
  return (
    <>
      <Grid className="MainGrid" container spacing={2}>
        
        
        <Grid className="Grid" item xs={12}>
          <Item>xs=8</Item>
        </Grid>
        <Grid className="Grid" item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid className="Grid" item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid className="Grid" item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid className="Grid" item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid className="Grid" item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid className="Grid" item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        {/* <Grid className="Grid" item xs={4}>
          <Item>xs=8</Item>
        </Grid> */}
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </>
  );
};

export default UI;
