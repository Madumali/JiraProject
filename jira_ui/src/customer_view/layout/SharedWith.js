import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.55),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.35),
    },
    marginLeft: 0,
    marginBottom:65,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


const SharedWith = () =>{
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
    //////////////////////////SEARCH FUNCTION IN TABLE
    const handleSearch = (e) => {
      let target = e.target;
      setFilterFn({
        fn: (items) => {
          if (target.value == "") return items;
          else
            return items.filter(
              (x) =>
                x.donor_name.toLowerCase().includes(target.value) ||
                x.national_id.toLowerCase().includes(target.value)
            );
        },
      });
    };

    return(<div style={{marginBottom:25}}>
  <Search>
            <SearchIconWrapper>
              <AddIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Share…"
              inputProps={{ 'aria-label': 'share' }}
              onChange={handleSearch}
            />
          </Search>
    </div>);
}
export default SharedWith;