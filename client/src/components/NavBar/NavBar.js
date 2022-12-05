import React from 'react'
// Ui components
import { Link, NavLink } from 'react-router-dom'
import { LinearProgress } from '@mui/material';
// Stylesheet
import './NavBar.css'
// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = React.useState(true)
  const [points, setPoints] = React.useState(10)
  const [imgurl, setImgurl] = React.useState('https://avatars.githubusercontent.com/u/90015510?v=4')
  let activeStyle = {
    color: '#44bd32',
    backgroundColor: '#252b36',
  }
  return (
    <nav>
      <h1>EcoHabit</h1>
      <div className='nav-mid'>
        <div className='nav-progressbar'>
          <span style={{ paddingRight: '0.175rem' }}>{points}</span>
          <span style={{ paddingRight: '1rem' }}>Points</span>
          <LinearProgress
            variant='buffer'
            value={points}
            valueBuffer={100}
            style={{ height: '1rem', width: '100%', borderRadius: '1rem' }}
          />
        </div>
        <ul className='nav-links'>
          <NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : undefined } className={`nav-link-item`}><HomeIcon /><span>Home</span></NavLink>
          <NavLink to="/fave" style={({ isActive }) => isActive ? activeStyle : undefined } className={`nav-link-item`}><FavoriteIcon /><span>Habits</span></NavLink>
          <NavLink to="/rcyc" style={({ isActive }) => isActive ? activeStyle : undefined } className={`nav-link-item`}><DeleteIcon /><span>Recycle</span></NavLink>
          <NavLink to="/comm" style={({ isActive }) => isActive ? activeStyle : undefined } className={`nav-link-item`}><DriveEtaIcon /><span>Commuting Habits</span></NavLink>
          <NavLink to="/eats" style={({ isActive }) => isActive ? activeStyle : undefined } className={`nav-link-item`}><RestaurantIcon /><span>Eating</span></NavLink>
          <NavLink to="/nrgy" style={({ isActive }) => isActive ? activeStyle : undefined } className={`nav-link-item`}><FlashOnIcon /><span>Energy</span></NavLink>
        </ul>
      </div>
      <div className='nav-end'>
        {loggedIn ? 
          <div className='nav-end'>
            <Link style={{ paddingRight: '2rem', color: 'white' }}><NotificationsIcon style={{ transform: 'scale(1.5)' }}/></Link>
            <Link to='/user'>
              <div className='user-btn'>
                <img src={imgurl} alt="" srcset="" />
              </div>
            </Link> 
          </div>
          : 
          <Link to='/login' className="login-btn">Login</Link>
        }
      </div>
    </nav>
  )
}

export default NavBar