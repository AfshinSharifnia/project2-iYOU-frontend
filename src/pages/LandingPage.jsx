import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import '../App.css';
import BackgroundImage from '../assets/images/LoginBG.png';
import logo from '../assets/images/iYouLogo.png';

export default function LandingPage() {
  return (
    <header style={HeaderStyle}>
      <box>
        <div>
          <img className='BackLogoStyle' src={logo} alt='logo' />
        </div>
        <div className='buttons text-center'>
          <Link to='/login'>
            <button className='primary-button'>
              log in
            </button>
          </Link>
        </div>
      </box>
    </header>
  );
}

const HeaderStyle = {
  width: '100vw',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

// const LogoStyle = {
//   border: '5px',
//   borderShadow: '6px',
//   opacity: '50%',
//   background: 'white',
// };

// const BackLogoStyle = {
//   width: '40%',
//   height: '40%',
//   opacity: '100%',
//   margin: 'auto',
//   display: 'block',
//   border: '5px',
//   borderShadow: '6px',
//   backgroundColor: '#ffff',
// };

