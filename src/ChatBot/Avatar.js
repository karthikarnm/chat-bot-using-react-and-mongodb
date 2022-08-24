import React from 'react'
import { Chatbot } from "react-chatbot-kit";
import './main.css'
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import "./window.css"


function window() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


const Avatar = () => {
  return (
    <div className='app'>
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
        }}>
        <div className='popup'> <button className="btn vibrate-1 button-33"
          onClick={window} type="button" value="Chat">Bot</button>
          <div class="popupwindow" id="myPopup" style={{
            height: '460px',
            width: '275px',
            maxWidth: "400px"
          }}>
            <div
              style={{
                maxWidth: '300px'
              }}>
              <Chatbot
                config={config} messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
<script src="https://kit.fontawesome.com/159a0ab838.js" crossorigin="anonymous"></script>

export default Avatar