import React from "react";
import io from 'socket.io-client';
const socket =io.connect("http://localhost:5000")


const Chat = () => {
    const sendMessage=()=>{
        socket.emmit()

    }
  return (
    <div className="Chat-onatiner">
      <input placeholder="Message...." />
      <button onclick={sendMessage}>Send Message</button>
    </div>
  );
};
export default Chat;
