import React from "react";
import Box from "@mui/material/Box";

const Body = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '16px' }}>
      <div style={{width: '50%'}}>
        <h3 style={{ color: '#ffffff' }}>Recent Transactions</h3>
        <Box sx={{ bgcolor: '#ffffffff', p: 2, borderRadius: 1 ,width: '90%'}}>
            {/* Render recent transactions here */}
        </Box>
      </div>
      <div style={{width: '50%'}}>
        <h3 style={{ color: '#ffffff' }}>Top Expense</h3>
        <Box sx={{ bgcolor: '#ffffffff', p: 2, borderRadius: 1 ,width: '90%'}}>
            {/* Render top expense here */}
        </Box>
      </div>
    </div>
  );
};

export default Body;
