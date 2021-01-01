import React from 'react';
import './Room.css';

const Room = () => {
    return(
      <div>
        <h1>Room</h1>
        <script src="../../backend/public/scriptRoom.js"></script>
        <script defer src="https://unpkg.com/peerjs@1.2.0/dist/peerjs.min.js"></script>
        <script src="/socket.io/socket.io.js" defer></script>
        <script src="../../backend/public/script.js" defer></script>
        
        <div id="video-grid"></div>
      </div>
            
    );
}

export default App;