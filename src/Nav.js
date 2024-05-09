import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate()

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    }
    else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener("scroll", transitionNavBar);

  }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
            <img 
            onClick={() => navigate('/')}
            className='nav_logo' 
            src='https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png' 
            alt='' />
            
            <img 
            onClick={() => navigate('/profile')}
            className='nav_avatar' 
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </div>

        
        
    </div>
  )
}

export default Nav