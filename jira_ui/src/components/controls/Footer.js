import React, {Fragment} from "react"; 
import BottomNavigation from '@mui/material/BottomNavigation';
import { blueGrey } from "@mui/material/colors";
import Typography from '@mui/material/Typography';
import { Divider, Grid } from "@mui/material";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Footer() {
    return (
      <>
      <div style={{marginTop: "2rem"}} >

<Divider/>
  <Typography
             variant="body"
             component="div"
             sx={{ flexGrow: 1 }}
             style={{
              fontWeight:600,
               paddingBottom: 5,
               marginTop: 30,
               marginBottom: 20,
               textAlign: "center",
               color: "red",
             }}
          >
            
            © 2022 Axiata Digital Labs
          
          {/* <Fragment>
          
            <Link to="/login/kk" style = {{color:"#000000"}}> more</Link> 
          </Fragment> */}
         
          </Typography>
       
 
          
   
        </div>
         <Grid container direction="row">
         <Grid item xs={3} alignContent="left" alignItems="left">
         {/* <img src={AtlasLogo} alt="Atlassian Logo" style = {{ width: 100,marginTop:5 }}/> */}
         </Grid>
         <Grid item xs={5}>
         
       
        
      
       

         </Grid>
         <Grid item xs={4}>

         </Grid>
       </Grid>
       </>
     
)
}

export default Footer
