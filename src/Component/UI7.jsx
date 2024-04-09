import React, { useState } from "react";
import Item from "./Item";
import { Grid, IconButton } from "@mui/material";
import "./Item.css";
import Button1 from "../Button";
import { MainGrid, GridStyle, HomePage } from "./style";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg3 from "../assets/svg3.svg";
import svg4 from "../assets/svg4.svg";
import svg5 from "../assets/svg5.svg";
import svg6 from "../assets/svg6.svg";
import svg7 from "../assets/svg7.svg";
import { Box } from "@mui/material";

const UI7 = () => {
  const cardTitles = [
    {
      title: "New Test",
      svg: svg4,
    },
    {
      title: "Programs",
      svg: svg5,
    },
    {
      title: "Reports",
      svg: svg6,
    },
    {
      title: "Settings",
      svg: svg7,
    },
  ];

  const buttonIcons = {
    svg1: svg1,

    svg2: svg2,

    svg3: svg3,
  };

  return (
    <>
      <Box sx={HomePage}>
        <Grid
           sx={MainGrid}
          container
          // spacing={{ xs: 2,sm: 2, md: 3 }}
          // columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {cardTitles?.map((card, index) => (
            <Grid sx={GridStyle} item xs={6} sm={3} md={3} key={card?.title}>
              <Item cardDetails={card} />
            </Grid>
          ))}
        </Grid>

        <Button1
          buttonIconsDetails={buttonIcons}
          // svg1={buttonIcons.svg1}
          // svg2={buttonIcons.svg2}
          // svg3={buttonIcons.svg3}
        />
      </Box>
    </>
  );
};

export default UI7;
