import React from "react";
import NavBar from "../navbar/NavBar";
import ViewCard from "./ViewCard";
import Mainimg from "../../components/images/back3.jpg";
import { makeStyles } from '@mui/styles';


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

const MainPage = () => {
  const classes = useStyles();
    return(
        <div  className={classes.root}>
            <NavBar/>
        
          <div>
         
        <ViewCard />
            </div>  
        
        </div>
        
    );
}
export default MainPage;