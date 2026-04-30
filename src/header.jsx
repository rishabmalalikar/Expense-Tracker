import React from "react";
import Card from "./card";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "16px" , backgroundColor: "#626262", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.35)" }}>
      <Card type="income" />
      <Card type="expense" />


      <div style={{display: 'flex' ,gap: '10px'}}>
        <Box style={{display:'flex', flexDirection: 'row', alignItems: 'center' ,gap:'5px'}}>
          <Box sx={{width: 26,height: 8,bgcolor: '#6a0dad',}}>
          </Box>
          <Typography style={{ width: 'fit-content', fontFamily: "Open Sans", color: '#ffffff'}}>
            Food
          </Typography>
        </Box>

        <Box style={{ display:'flex', flexDirection: 'row', alignItems: 'center' ,gap:'5px' }}>
          <Box sx={{width: 26,height: 8,bgcolor: ' #FF9304'}}>
          </Box>
          <Typography style={{ width: 'fit-content', fontFamily: "Open Sans", color: '#ffffff' }}>
            Entertainment
          </Typography>
        </Box>

        <Box style={{display:'flex', flexDirection: 'row', alignItems: 'center' ,gap:'5px' }}>
          <Box sx={{width: 26,height: 8,bgcolor: '#FDE006'}}>
          </Box>
          <Typography style={{ width: 'fit-content', fontFamily: "Open Sans", color: '#ffffff' }}>
            Travel
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Header;
