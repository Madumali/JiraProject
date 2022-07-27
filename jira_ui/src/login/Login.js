import React, { Fragment } from "react";
import MainLogo from "./Logo";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from "../components/controls/Input";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Footer from '../components/controls/Footer';
import Mainimg from "../components/images/w1.jpg";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  root: {
    maxHeight: '100vh',
    backgroundImage : `url(${Mainimg})`,
    backgroundRepeat:'no-repeat',
    backgroundSize : 'cover',
    display:'flex',
    alighItems : 'center',
    justifyContent:'center',
    height:"150vh",
  },
}))

function Login(){
    const classes = useStyles()
    const paperStyle={padding :20,height:'65vh',width:380, margin:"0px auto" , marginTop:50, backgroundColor:"#ffffff95"}
    const btnstyle={margin:'8px 0', backgroundColor:"#0000FF"}
    
    return(
        <div className={classes.root}>
        <Grid>
           
            <Paper elevation={2} style={paperStyle}>
            <MainLogo/>
                <Grid align='center'>
                     
                    <h2>Log in to your account </h2>
                </Grid>
                <Grid container spacing={2} direction="column">
                <Grid item  xs={12}>
                    <Input label='Username' placeholder='Enter username' fullWidth required/>
                </Grid>
                <Grid item  xs={12}>
                <Input label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                        
                    />
                    }
                    label="Remember me"
                 />
                </Grid>
                <Grid item  xs={12}>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Log in</Button>
                </Grid>
                
                
                </Grid>
                <Typography
                    style={{
                        paddingBottom: 15,
                        color: "blue",
                        textAlign: "center",
                        
                      }}
                >
                   Forgotten Password? 
                </Typography>
                <Typography > 
                     <Link href="#" style = {{color:"#0000FF"}} >
                     Can't log in ?  Sign up for an account
                </Link>
                </Typography>
            </Paper>
            <Footer/>
        </Grid>
        
        </div>   
    )
    
}

export default Login;