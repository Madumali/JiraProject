import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {  Grid, InputAdornment, MenuItem, TextField } from '@mui/material';
import Input from '../components/controls/Input';
import SearchIcon from '@mui/icons-material/Search';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const list = [
  {id:"status1", label:"Status:open requests"}
]

export default function AllRequest() {
 
  return (
    <div>
      
    <Box sx={{ height: 400, width: '100%', margin:"30px auto" }}>
    <Grid container spacing={1} style={{marginBottom:20}} alignItems="left" justifyContent="left" >
      <Grid item xs = {5}>
    <TextField
             label="Search "
             variant = "outlined"
             size="small"
            style={{ width: "40%", marginLeft:-250}}
       
             InputProps={{
   
               startAdornment: (
                 <InputAdornment position="start">
                   <SearchIcon />
                 </InputAdornment>
               ),
             }}
            //  onChange={handleSearch}
           /> 
 </Grid>
 <Grid item xs = {5}>
 <Input
      select
      name="month"
      label="Filter By status"
      size="small"
      // value={selectval}
    //  onChange={(e)=>{onChangeMonth(e.target.value); setSelectVal(e.target.value)} } 
    style={{width:"40%", marginLeft:-750}}
        >
        
      <MenuItem defaultValue = "">None</MenuItem>
        {
          list.map((item , i)=> (
           <MenuItem key = {i}   value={item.id} >{item.label}</MenuItem>))
            
        }
    </Input> 
    </Grid>
    <Grid></Grid>
    </Grid>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
        GridLines="None"
      />
    </Box>
    </div>
  );
}
