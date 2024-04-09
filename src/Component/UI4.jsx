import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";
import "./Item.css";

const UI4 = () => {
  return (
    <>
    {/* sm=4 2 carts */}
    <Grid className="MainGrid" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid  className="Grid" item xs={2} sm={4} md={6} key={index}>
      <Item  >xs=2</Item>
    </Grid>
  ))}
</Grid>
    </>
  );
};

export default UI4;








