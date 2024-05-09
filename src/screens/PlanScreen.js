import React from 'react';
import './PlanScreen.css';
import { useNavigate } from 'react-router-dom';

function PlanScreen() {
    const navigate = useNavigate();
  return (
    <div className='plansScreen'>
        <div className='plansScreen__plan'>
            <div className='plansScreen__info'>
                <h5>Premium</h5>
                <h6>4K + HDR</h6>
            </div>
            <button onClick={() => navigate('/')}>Subscribe</button>
        </div>
        <div className='plansScreen__plan'>
            <div className='plansScreen__info'>
                <h5>Basic</h5>
                <h6>720p</h6>
            </div>
            <button onClick={() => navigate('/')}>Subscribe</button>
        </div>
        <div className='plansScreen__plan'>
            <div className='plansScreen__info'>
                <h5>Standard</h5>
                <h6>1080p</h6>
            </div>
            <button onClick={() => navigate('/')}>Subscribe</button>
        </div>
    </div>
  )
}

export default PlanScreen;