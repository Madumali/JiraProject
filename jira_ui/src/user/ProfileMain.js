import React from "react";
import NavBar from "../customer_view/navbar/NavBar";
import Mainimg from "../components/images/back3.jpg";
import { makeStyles } from '@mui/styles';
import Profile from "./Profile";


const useStyles = makeStyles(() => ({
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

const ProfileMain = () => {
  const classes = useStyles();
    return(
        <div  className={classes.root}>
            <NavBar/>
        
          <div>
         
        <Profile />
            </div>  
        
        </div>
        
    );
}
export default ProfileMain;