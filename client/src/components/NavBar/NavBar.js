import React, { useState, useEffect } from 'react'
// Ui components
import { Link, NavLink } from 'react-router-dom'
import { LinearProgress } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Grid, Paper } from '@mui/material'
// Styles
import { styled } from '@mui/material/styles'
import navbar from './NavBar.module.css'
// Icons
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { faRecycle } from '@fortawesome/free-solid-svg-icons'
// Theme
import theme from '../../theme/index'

// Title
const Item = styled(Box)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '2.25rem',
  fontWeight: '500',
  color: '#44bd32',
  border: 'none',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

// Used at the end of navbar
const CenteredItem = styled(Box)((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: props.padding,
  width: props.width,
  height: '100%',
}))

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [points, setPoints] = useState(10)
  const [imgurl, setImgurl] = useState('https://avatars.githubusercontent.com/u/90015510?v=4')

  let activeStyle = {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  }

  return (
    // Nav starts here
    <Grid container sx={{ fontFamily: 'Montserrat', backgroundColor: '#353b48', padding: 1, }}>
      {/* The main title */}
      <Grid xs={2}><Item>EcoHabit</Item></Grid>
      {/* Middle container */}
      {/* contains 2 items taking up 12 col spaces each */}
      <Grid xs={8} container>
        {/* Progressbar and points */}
        <Grid xs={12} container sx={{ padding: '1rem 0 1rem 0' }}>
          <Grid xs={1.5} sx={{ color: 'white', textAlign: 'start' }}>
            {points} Points
          </Grid>
          <Grid xs>
            <LinearProgress
              variant='buffer'
              value={points}
              valueBuffer={100}
              style={{ height: '1rem', width: '100%', borderRadius: '1rem' }}
            />
          </Grid>
        </Grid>
        {/* Navigation */}
        <Grid xs={12} container sx={{ backgroundColor: '#2f3640' }}>
          <Grid xs={2}>
            <NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : undefined } className={navbar.navLinkItem}><HomeIcon /><span>Home</span></NavLink>
          </Grid>
          <Grid xs={2}>
            <NavLink to="/fave" style={({ isActive }) => isActive ? activeStyle : undefined } className={navbar.navLinkItem}><PendingActionsIcon /><span>Habits</span></NavLink>
          </Grid>
          <Grid xs={2}>
            <NavLink to="/rcyc" style={({ isActive }) => isActive ? activeStyle : undefined } className={navbar.navLinkItem}><FontAwesomeIcon icon={faRecycle} size="lg" /><span>Recycle</span></NavLink>
          </Grid>
          <Grid xs={2}>
            <NavLink to="/comm" style={({ isActive }) => isActive ? activeStyle : undefined } className={navbar.navLinkItem}><DirectionsBusIcon /><span>Commute</span></NavLink>
          </Grid>
          <Grid xs={2}>
            <NavLink to="/eats" style={({ isActive }) => isActive ? activeStyle : undefined } className={navbar.navLinkItem}><RestaurantIcon /><span>Eating</span></NavLink>
          </Grid>
          <Grid xs={2}>
            <NavLink to="/nrgy" style={({ isActive }) => isActive ? activeStyle : undefined } className={navbar.navLinkItem}><FlashOnIcon /><span>Energy</span></NavLink>
          </Grid>
        </Grid>
      </Grid>
      {/* Navbar end */}
      <Grid xs={2} container>
        {loggedIn ? 
          <CenteredItem width="100%">
            <CenteredItem padding="0 2rem 0 0"> {/* top right bottom left */}
              <Link style={{ color: 'white' }}><NotificationsIcon style={{ transform: 'scale(1.5)' }}/></Link>
            </CenteredItem>
            <CenteredItem>
              <Link to='/user'>
                <div className={navbar.userBtn}>
                  <img src={imgurl} alt="" srcset="" />
                </div>
              </Link> 
            </CenteredItem>
          </CenteredItem>
          : 
          <Link to='/login' className={navbar.loginBtn}>Login</Link>
        }
      </Grid>
    </Grid>
  )
}

export default NavBar