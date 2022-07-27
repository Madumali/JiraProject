import React, { Fragment } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { blueGrey} from "@mui/material/colors";

function PasswordReset(){
    
    const btnstyle={margin:'20px 0', backgroundColor:"#E6E6E6", color: blueGrey[500],  marginLeft: -230}
    const fields = { width: "400px"} 
    return(
        <>
        <Grid>
            
           
                <Grid container spacing={2} direction="column" marginLeft={-18}>
                <Grid item  xs={12}>
                    <TextField label='Username' placeholder='Enter username' style= {fields} required size="small"/>
                </Grid>
                <Grid item  xs={12}>
                <TextField label='Password' placeholder='Enter password' type='password' style= {fields} required size="small"/>
               
                </Grid>
                <Grid item  xs={12}>
                <TextField label='Confirm Password' placeholder='Confirm password' type='password' style= {fields} required size="small"/>
               
                </Grid>
                <Grid item  xs={12} >
                {/* <div className ="btn-group"> */}
                    <Button type='submit' color='primary' variant="contained" size="small" style={{marginLeft:-260, marginRight:10, marginBottom:10}} >Save</Button>
                    
                    <Button type='submit' color='primary' variant="contained" size="small"  style={{backgroundColor:"#E6E6E6", marginBottom:10}} >Reset</Button>
                    {/* </div> */}
                </Grid>
               
                
                </Grid>
              
           
        </Grid>
       
        </> 
          
    )
    
}

export default PasswordReset;

// import { IconName } from "react-icons/bs";
// import {BsFillInfoCircleFill} from "react-icons/bs";
// import {BiMessageRoundedEdit} from "react-icons/bi";
// import {GoInfo } from "react-icons/go";