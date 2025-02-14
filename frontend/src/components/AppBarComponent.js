import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box } from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const AppBarComponent = () => {

  const navigate=useNavigate();
  const handleSearch=()=>{
    navigate('/search')
  }
  const token=localStorage.getItem('token')
  const name=localStorage.getItem('username')
  const [username, setUsername]=useState(name)

  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#141414' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 2 }}>
          <Link to="/">
            MovieWave OTT
          </Link>
        </Typography>
        <Typography sx={{flexGrow:2}}>
          <Link to="/">
            Home 
          </Link>
        </Typography>
        {token?(
          <Box sx={{flexGrow:9,display: 'flex'}}>
            <Typography sx={{flexGrow:4}}>
            <Link to="/myaccount">
              Welcome back {username} !!!
            </Link>
            </Typography>
            <Typography sx={{flexGrow:10}}>
              <Box onClick={handleLogout} sx={{cursor:'pointer'}}>
                Logout
              </Box>
            </Typography>
          </Box>
        ):(
          <Box sx={{flexGrow:9,display: 'flex'}}>
            <Typography sx={{flexGrow:4}}>
            <Link to="/login">
              Login 
            </Link>
            </Typography>
            <Typography sx={{flexGrow:12}}>
            <Link to="/register">
              Register 
            </Link>
            </Typography>
          </Box>
        )}
        
        <Search onClick={handleSearch}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
