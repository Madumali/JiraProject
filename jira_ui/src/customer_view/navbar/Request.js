import { Avatar, Badge, Button, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { useStyles } from "../../components/Styles";
import ListIcon from '@mui/icons-material/List';
import { Link } from "react-router-dom";

const Request = () => {

    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const menu = [
        {
            label:"All requests"
        },
       
    ]
  
    return(
        <div style={{marginTop:5}}>
            <Button variant="outlined" size="small" style={{border:"1px solid grey",borderRadius:20,width:115, backgroundColor:"#e3f2fd",paddingLeft:5}} onClick={handleClick}>
            <Badge badgeContent={1} color="primary"  sx={{"& .MuiBadge-badge":{backgroundColor:"blue", marginRight:1.5 }}} />
      
            
            Request
                </Button>

                <Menu
             
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{ mt: '45px'}}
                id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <List className={classes.navlist}>
          {menu.map((item,i) =>(
  <MenuItem key={i}  onClick={handleClose}>
<Link to="/all-requests" style={{textDecoration:"none", color:"black",textAlign:"right"}}>
  <Typography textAlign="center">{item.label}</Typography>
  </Link>
  </MenuItem>
          ))}

          </List>
          
    
      </Menu>
            
        </div>
    );
}
export default Request;


{/* <Menu
sx={{ mt: '45px' }}
id="menu-appbar"
anchorEl={anchorElUser}
anchorOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
keepMounted
transformOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
open={Boolean(anchorElUser)}
onClose={handleCloseUserMenu}
>
{settings.map((setting) => (
  <MenuItem key={setting} onClick={handleCloseUserMenu}>
    <Typography textAlign="center">{setting}</Typography>
  </MenuItem>
))}
</Menu> */}