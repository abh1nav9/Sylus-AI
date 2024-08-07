import React from "react";
import "./MainBody.css";
import { assets } from "../../assets/assets";

const MainBody = () => {
  return (
    <div className="main">
      <div className="nav">
        <div>Sylus</div>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="mainContainer">
        <div className="greet">
          <div>
            <div className="span">Hello There</div>
          </div>
          <div>How can I help you today?</div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="cardParagraph">
              Suggest beautiful places to see on an upcoming road trip
            </div>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>
          <div className="card">
            <div className="cardParagraph">
              Briefly summarize this concept: urban planning
            </div>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>
          <div className="card">
            <div className="cardParagraph">
              Brainstorm team bonding activities for our work retreat
            </div>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
          <div className="card">
            <div className="cardParagraph">
              Tell me about ReactJS and React Native
            </div>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>
        <div className="mainBottom">
          <div className="searchBox">
            <input type="text" placeholder="Enter a promt here ..." />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              <img src={assets.send_icon} alt="Send Icon" />
            </div>
          </div>
          <div className="bottomInfo">
            Sylus may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Sylus Apps.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
