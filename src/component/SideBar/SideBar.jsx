import React from 'react';
import './SideBar.css';
import {assets} from '../../assets/assets';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt='MenuBar' />
            <div className="newChat">
                <img src={assets.plus_icon} alt='Plus Icon' />
                <div>New Chat</div>
            </div>
            <div className="recent">
                <div className="recentTitle">Recent</div>
                <div className="recentEntry">
                    <img src={assets.message_icon} alt='Message Icon' />
                    <div>What is React ...</div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottomItem">
                <img src={assets.question_icon} alt='Question Icon' />
            </div>
        </div>
    </div>
  )
}

export default SideBar