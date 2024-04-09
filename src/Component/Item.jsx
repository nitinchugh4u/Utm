
import React from "react";
import "./Item.css";
import { Divider, Typography } from "@mui/material";
import { Container,Container2, titlediv, Items ,MidLine} from "./style";
// import Box from '@mui/material/Box';
// or
import { Box } from '@mui/material';
function Item(props) {
  let { title, svg } = props.cardDetails;
  return (
    <Box sx={Container}>
      {/* <Box sx= {Container2} >    */}
      <Box sx={Items}>
        <img src={svg} alt="" />
        {/* <img
          src={svg}
          alt=""
          style={{ width: "100%", height: "95%", maxWidth: "90%" }}
        /> */}

        {/* <Divider sx = {MidLine}   /> */}
      </Box>
      {/* </Box> */}
      <Box sx={titlediv}>
        <Typography color="secondary">{title}</Typography>
      </Box>
    </Box>
  );
}

export default Item;















