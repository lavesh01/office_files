import "./Navbar.css";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Navbar = () => {
  return (
    <div className="contain">

    <div class="nav-container">
        <div class="wrapper">

            <div class="left">
                <h1 class="logo">Refrens</h1>
            </div>
            
            <div class="right">
                <div class="menu-item"><span class="country">IN</span>India <ExpandMoreIcon /></div>
                <div class="menu-item">Free tools <ExpandMoreIcon /></div>
                <div class="menu-item">Accept Payments</div>
                <div class="menu-item">Login</div>
                <div class="menu-item"><button class="register-btn">Register</button></div>
            </div>

        </div>
    </div>
    
    </div>
  )
}

export default Navbar