import React, {useState} from 'react';
import './SideBar.css';
import {assets} from '../../assets/assets';

const SideBar = () => {

const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt='MenuBar' />
            <div className="newChat">
                <img src={assets.plus_icon} alt='Plus Icon' />
                {extended ? <div>New Chat</div> : null }
            </div>
            { extended ?
             <div className="recent">
                 <div className="recentTitle">Recent</div>
                 <div className="recentEntry">
                     <img src={assets.message_icon} alt='Message Icon' />
                     <div>What is React ...</div>
                 </div>
             </div>
            : null }
        </div>
        <div className="bottom">
            <div className="bottomItem recentEntry">
                <img src={assets.question_icon} alt='Question Icon' />
                {extended ? <div>Help</div> : null }
            </div>
            <div className="bottomItem recentEntry">
                <img src={assets.history_icon} alt='History Icon' />
                {extended ? <div>Activity</div> : null }
            </div>
            <div className="bottomItem recentEntry">
                <img src={assets.setting_icon} alt='Setting Icon' />
                {extended ? <div>Setting</div> : null }
            </div>
        </div>
    </div>
  )
}

export default SideBar