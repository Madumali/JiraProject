import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '../../components/controls/Input';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { IconButton } from '@mui/material';

export default function CommentSec() {
  return (
    <Box
      sx={{
        // width: 300,
        // height: 300,
       marginLeft:-5
      }}
    >
          <IconButton  sx={{ p: 0,marginRight:1}}>
          <Avatar alt="Memy Sharp" src="/static/images/avatar/2.jpg" style={{width:"30px",height:"30px"}} sx={{ bgcolor: deepPurple[500], display: { xs: 'flex', md: 'flex' } }}/>
   </IconButton>
        
        <Input 
         label="Add a comment"
         type="text"
         name="comments"
         placeholder="Add a comment"
         size="small"
         style ={{ width:400 }}

        />
        </Box>
  );
}
