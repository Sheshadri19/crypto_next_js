

import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    
  return (
    <div>
        <AppBar position="static" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'chocolate',
              textDecoration: 'none',
            }}
          >
        BINANCE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem  onClick={handleCloseNavMenu}>
                 <Link href='/' style={{textDecoration:'none'}}><Typography textAlign="center">Home</Typography></Link> 
                 <Link href='/market' style={{textDecoration:'none'}}><Typography textAlign="center">Market</Typography></Link> 
                 <Link href='/rate' style={{textDecoration:'none'}}><Typography textAlign="center">Rate</Typography></Link> 
                 <Link href='/exchange' style={{textDecoration:'none'}}><Typography textAlign="center">Exchange</Typography></Link> 
   
                </MenuItem>
              
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
           BINNACE
          </Typography >

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',textDecoration: 'none', } }}>
            
          <Link href='/' style={{textDecoration:'none'}}>  <Button
               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'ORANGE', display: 'block',textDecoration: 'none',fontSize:'20px',fontWeight:'bold'  }}
              >
            Home
              </Button></Link>

              <Link href='/market' style={{textDecoration:'none'}} > <Button onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'blue', display: 'block',fontSize:'20px',fontWeight:'bold'  }}
             >
             Market
             </Button></Link>

             <Link href='/exchange' style={{textDecoration:'none'}} > <Button onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'BLACK', display: 'block',fontSize:'20px',fontWeight:'bold'  }}
             >
             Exchange
             </Button></Link>

             <Link href='/rate' style={{textDecoration:'none'}} > <Button onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'brown', display: 'block',fontSize:'20px',fontWeight:'bold' }}
             >
             Rates
             </Button></Link>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Header
