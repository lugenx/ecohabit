import React from 'react'
import './NavBar.css'
import DeleteIcon from '@mui/icons-material/Delete';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const NavBar = () => {
  const [active, setActive] = React.useState('recycling-habits')
  return (
    <nav>
      <h1>EcoHabit</h1>
      <ul>
        <li className={`${active == 'recycling-habits' ? 'active' : ''}`} onClick={() => setActive('recycling-habits')}><DeleteIcon /><span>Recycling Habits</span></li>
        <li className={`${active == 'commuting-habits' ? 'active' : ''}`} onClick={() => setActive('commuting-habits')}><DriveEtaIcon /><span>Commuting Habits</span></li>
        <li className={`${active == 'eating-habits' ? 'active' : ''}`} onClick={() => setActive('eating-habits')}><RestaurantIcon /><span>Eating Habits</span></li>
        <li className={`${active == 'energy-habits' ? 'active' : ''}`} onClick={() => setActive('energy-habits')}><FlashOnIcon /><span>Energy Use Habits</span></li>
      </ul>
    </nav>
  )
}

export default NavBar