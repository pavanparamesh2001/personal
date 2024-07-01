import React, { useState, useEffect } from 'react';
import './Navbar.css';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';
import './Header.css';
import {
MDBContainer,
MDBNavbar,
MDBNavbarBrand,
MDBNavbarToggler,
MDBNavbarNav,
MDBNavbarLink,
MDBIcon,
MDBCollapse
} from 'mdb-react-ui-kit';

function Header({ theme, toggleTheme }) {
const [openNavSecond, setOpenNavSecond] = useState(false);
const [fadeClass, setFadeClass] = useState('');

useEffect(() => {
setFadeClass('fade-in');
}, []);

return (
<div>
<MDBNavbar expand='lg' light={!theme} dark={theme} bgColor={theme ? 'dark' : 'light'}>
<MDBContainer fluid>
<MDBNavbarBrand href='#' id='navbar' className={fadeClass}>
<h3 style={{ color: theme ? "teal" : "black" }}>P Pavan</h3>
</MDBNavbarBrand>
<MDBNavbarToggler
aria-expanded='false'
aria-label='Toggle navigation'
onClick={() => setOpenNavSecond(!openNavSecond)}
>
<MDBIcon icon='bars' fas />
</MDBNavbarToggler>
<MDBCollapse navbar open={openNavSecond}>
<MDBNavbarNav id='Home-section' className={fadeClass}>
<MDBNavbarLink active aria-current='page' href='#Home'>
Home
</MDBNavbarLink>
<MDBNavbarLink href='#About'>About</MDBNavbarLink>
<MDBNavbarLink href='#Skills'>Skills</MDBNavbarLink>
<MDBNavbarLink href='#works'>Works</MDBNavbarLink>
<MDBNavbarLink href='#contact'>Contact</MDBNavbarLink>
<MDBNavbarLink href='#'>
</MDBNavbarLink>
<div className="search">
<img onClick={toggleTheme} src={theme ? toggle_light : toggle_dark} alt='' className='toggle-icon' width={'50px'} />
</div>
<div className="nav">
<i className="fa-solid fa-bars" onClick={() => console.log('Menu clicked')} id='icon'></i>
</div>
</MDBNavbarNav>
</MDBCollapse>
</MDBContainer>
</MDBNavbar>
</div>
);
}

export default Header; 