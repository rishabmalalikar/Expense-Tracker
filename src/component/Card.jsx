// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import React, { useState } from "react";  
import Button  from "./Button";
import Modal from "./Modal";



const Card=props=> {
  const {text,value}=props;
  const [modelOn,setModelOn]=useState(false);
  const toggleModel=()=>setModelOn(!modelOn);
  return (
    // <Card  style={{ width: '30%', padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.43)', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' , display: 'flex', flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center'}}>
    //   <CardContent sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{type === "income" ? (
    //     <Typography gutterBottom sx={{ paddingTop: '25px', color: 'white', font: "ubuntu", fontWeight: 400, fontStyle: 'Regular', fontSize: '30px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center' ,alignItems: 'center' }}>Wallet Balance: <span style={{color: '#9dff5bff',fontFamily: 'Ubuntu',fontWeight: 700,fontStyle: 'Bold',fontSize: '30px',leadingTrim: 'NONE',lineHeight: '100%',letterSpacing: 0 }}>₹{5000}</span></Typography>) : (<Typography gutterBottom sx={{ paddingTop: '25px', color: 'white', font: "ubuntu", fontWeight: 400, fontStyle: 'Regular', fontSize: '30px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center' ,alignItems: 'center' }}>Expenses: <span style={{color: '#f4bb4a',fontFamily: 'Ubuntu',fontWeight: 700,fontStyle: 'Bold',fontSize: '30px',leadingTrim: 'NONE',lineHeight: '100%',letterSpacing: 0 }}>₹{5000}</span></Typography>)}
    //   </CardContent>
    //   <CardActions>{type === "income" ? (<Button size="large" variant="contained" style={{borderRadius: '15px', background: 'linear-gradient(90deg, #B5DC52 0%, #89E148 100%)'}}>+ Add income</Button>) : (<Button size="large" variant="contained" style={{borderRadius: '15px', background: 'linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)'}}> + Add expense</Button>)}
    //   </CardActions>
    // </Card>
    <div className="card">
      <span className="cardtext">
        <span>{text}</span>
        <span className={text==="Expense"?"cardtextRed":"cardtextGreen"}>₹{value}</span>
      </span>
      <Button text={text==="Expense"?"+ Add expense":"+ Add Income"} background={text==="Expense"?"gradientRed":"gradientGreen"} buttonSize="largeButton" clickFunction={toggleModel} />
      {modalOn?<Modal toggleModel={toggleModel} text={text==="Expense"?"Add Expense":"Add Balance"} />:null}
    </div>
  );
}

export default Card;
