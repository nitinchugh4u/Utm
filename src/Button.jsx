
// import React from "react";
// import { Tooltip, IconButton, Button } from "@mui/material";
// import { ButtonStyle } from "./Component/style";
// import { Box } from '@mui/material';

// function Button1(props) {

//   console.log(props)
//   let { svg1, svg2, svg3 } = props.buttonIconsDetails;

//   return (
//     <div >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent:"space-around",
//           padding: "10px",
//           gap: "30px",
//           marginTop: "100px"
//         }}
//       >
//         <Tooltip title="Customer Support Page">
//           <IconButton className="button" sx={{ ...ButtonStyle, width: "auto" }}>
//              <img src={svg1} alt="" />
//           </IconButton>
//         </Tooltip>

//         <Tooltip title="Logout">
//           <IconButton className="button" sx={{ ...ButtonStyle, width: "auto" }}>
//           <img src={svg2} alt="" />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="Shutdown">
//           <IconButton className="button" sx={{ ...ButtonStyle, width: "auto" }}>
//           <img src={svg3} alt="" />
//           </IconButton>
//         </Tooltip>
//       </Box>
//     </div>
//   );
// }

// export default Button1;

import React from "react";
import { Tooltip, IconButton, Button } from "@mui/material";
import { ButtonStyle } from "./Component/style";
import { Box } from "@mui/material";

function Button1(props) {

  console.log(props);
  let { svg1, svg2, svg3 } = props.buttonIconsDetails;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "5px",
        gap: "30px",
        marginTop: { xs: "34px", sm: "250px", md: "350px" },
      }}
    >
      <Tooltip title="Customer Support Page">
        <IconButton className="button" sx={ButtonStyle}>
          <img src={svg1} alt="" style={{}}/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Logout">
        <IconButton className="button" sx={ButtonStyle}>
          <img src={svg2} alt="" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Shutdown">
        <IconButton className="button" sx={ButtonStyle}>
          <img src={svg3} alt="" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default Button1;
