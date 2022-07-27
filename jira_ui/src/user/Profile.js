import React from "react";
import { makeStyles } from '@mui/styles';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { blueGrey, deepPurple, red } from "@mui/material/colors";
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import NavBar from "../customer_view/navbar/NavBar";
import Button from '@mui/material/Button';
// import CustomBtn from "./CustomBtn";
import PasswordReset from "./PasswordReset";
import Mainimg from "../components/images/back3.jpg";
import { Avatar } from "@mui/material";
import {BsFillInfoCircleFill} from "react-icons/bs";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", 
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [hide, setHide] = React.useState(true);
  const btnstyle={margin:'20px 0', backgroundColor:"#E6E6E6", color: blueGrey[500],  marginLeft: -465}

  const hideDetails = () => {

    setHide(!hide);

  };

  
  return (
 
    <div style={{ marginTop: 100, marginBottom: 50 }}>
    <Card
      className={classes.root}
      style={{
        maxWidth: 750,
        backgroundColor: "white",
        margin: "0 auto",
      }}
    >
      <CardHeader
        style={{ backgroundColor: "#bcd2e8", height: 20 }}
        action={
          <>
          <BsFillInfoCircleFill style = {{marginTop:-10}}/>
          <IconButton >
            <Typography
              variant="subtitle2"
              style={{ color: "black", marginRight: 800, marginTop: -10 }}
            >
              
              Your changes may take up to five minutes to appear
            </Typography> 
          </IconButton>
          </>
        }
      />
      <Divider />
      <CardContent>
       
        <Grid container spacing={1} marginLeft={8}>
          <Grid item xs={1}>
          <Avatar alt="Memy Sharp" src="/static/images/avatar/2.jpg" style={{width:"70px",height:"70px", marginLeft:-20, marginTop:40}} sx={{ bgcolor: deepPurple[500], display: { xs: 'flex', md: 'flex' } }}/>
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="subtitle2"
              sx={{ flexGrow: 1 }}
              style={{
                marginTop: 20,
                textAlign: "Left",
                color: "#263238",
                fontWeight: 600,
              }}
            >
            
                {/* <PersonIcon  style={{ marginLeft: -50 }} /><br/> */}
              
                    Personal Details
            </Typography>
              
            <Typography
                    sx={{ flexGrow: 1 }}
                    style={{
                      marginTop: 20,
                      textAlign: "Left",
                      // marginLeft: 35,
                      color: blueGrey[500],
                    }}
                  >
                    Name
                  </Typography>
            
                
                
                <br/>
                <br/>
                <Typography
                      variant="subtitle2"
                      sx={{ flexGrow: 0 }}
                      style={{
                        marginTop: -28,
                        textAlign: "Left",
                        // marginLeft: 35,
                        color: "#263238",
                      }}
                    >
                      Name_Id
                    </Typography>

                    <Typography
                    sx={{ flexGrow: 1 }}
                    style={{
                      marginTop: 20,
                      textAlign: "Left",
                      // marginLeft: 35,
                      color: blueGrey[500],
                    }}
                  >
                    Email
                  </Typography>
                  <br/>
                <br/>
                <Typography
                      variant="subtitle2"
                      sx={{ flexGrow: 0 }}
                      style={{
                        marginTop: -28,
                        textAlign: "Left",
                        // marginLeft: 35,
                        color: "#263238",
                      }}
                    >
                      firstname.surname@axiatadigitallabs.com
                      <br/>
                    </Typography>
                    
                    <Button variant="contained" style={btnstyle} size="small">Manage your account</Button>
                    <PasswordReset/>
                    

          </Grid>
        </Grid>
      </CardContent>
        
    </Card>
   
  </div>
  );
}
