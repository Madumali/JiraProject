import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../customer_view/navbar/NavBar';
import Mainimg from "../components/images/back3.jpg";
import { makeStyles } from '@mui/styles';
import AllRequest from './AllRequest';
import { useStyles } from '../components/Styles';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const useStyless = makeStyles(() => ({
  root: {
    maxHeight: '50vh',
    backgroundImage : `url(${Mainimg})`,
    backgroundRepeat:'no-repeat',
    backgroundSize : 'cover',
    display:'flex',
    alighItems : 'center',
    justifyContent:'center',
    height:"150vh",
  },
}))

 const Requests = () => {
    const paperStyle={padding :30,height:'75vh',width:1000, marginTop:-40, marginBottom:20}

    const classes = useStyless()
    const classess = useStyles();
    return(
        <div  className={classes.root}>
            <NavBar/>
            
            <div className={classess.requestdiv}>
            <Paper elevation={5} style={paperStyle}>
            <Typography variant='h6' style={{textAlign:'left'}}>
                <Link to="/help" style={{textDecoration:"none"}}> Help Center</Link>
                </Typography>
                <Typography variant='h4' style={{marginTop:5,marginBottom:10 ,textAlign:'left'}}> Requests </Typography>
                <AllRequest/>
                </Paper>
            </div>
            
        </div>
    )
 }

 export default Requests;