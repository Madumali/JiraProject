import { alpha } from '@mui/material';
import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';




export const useStyles = makeStyles({

    navlist: {
        minWidth:'110px',
        maxWidth:'220px'
    },
    notiAvatar:{
        backgroundColor: blue["200"],
        color:"white",
    },
    link:{
        
        '&:hover': {
                // backgroundColor: theme.palette.error.light,
                cursor: 'pointer'
            },
            
    },
    seconddiv:{
        marginLeft:'40px',
    },
    titleText : {
        backgroundColor:alpha("#e1f5fe",0.25),
        '&:hover': {
            backgroundColor:alpha("#b2ebf2",0.35) ,
            
        },

    },
 requestdiv:{
    width:1000,
    marginTop:150,
 }
})