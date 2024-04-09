import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";
import "./Item.css";

const UI3 = () => {
  return (
    <>
      <Grid className="MainGrid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  className="Grid" item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid  className="Grid" item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid  className="Grid" item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid  className="Grid" item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </>
  );
};

export default UI3;
