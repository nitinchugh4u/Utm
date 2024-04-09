import React from "react";
import Item from "./Item";
// import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import "./Item.css";

const UI6 = () => {
  return (
    <>

    

<Box  className="MainGrid"  display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
  <Box className="Grid" gridColumn="span 3">
    <Item>xs=8</Item>
  </Box>
  <Box className="Grid" gridColumn="span 3">
    <Item>xs=4</Item>
  </Box>
  <Box className="Grid" gridColumn="span 3">
    <Item>xs=4</Item>
  </Box>
  <Box className="Grid" gridColumn="span 3">
    <Item>xs=8</Item>
  </Box>
</Box>
   

    </>
  );
};

export default UI6;

































