import React from 'react';
import './MainBody.css';
import { assets } from '../../assets/assets';

const MainBody = () => {
  return (
    <div className='main'>
        <div className="nav">
            <div>Sylus</div>
            <img src={assets.user_icon} alt='User Icon' />
        </div>
        <div className="mainContainer">
            <div className="greet">
                <div><span>Hola Amigo</span></div>
                <div>How can I help you today?</div>
            </div>
            <div className="cards">
                <div className="card">
                    <div>Suggest beautiful places to see on an upcoming road trip</div>
                    <img src={assets.compass_icon} alt='Compass Icon' />
                </div>
                <div className="card">
                    <div>Briefly summarize this concept: urban planning</div>
                    <img src={assets.buld_icon} alt='Bulb Icon' />
                </div>
                <div className="card">
                    <div>Brainstorm team bonding activities for our work retreat</div>
                    <img src={assets.message_icon} alt='Message Icon' />
                </div>
                <div className="card">
                    <div>Tell me about ReactJS and React Native</div>
                    <img src={assets.code_icon} alt='Code Icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody;