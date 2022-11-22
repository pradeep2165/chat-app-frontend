import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { GetContext } from '../../context/ContextState';
import './Join.css'

export default function Join() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const {room, name, setName, setRoom} = GetContext();
  const [roomId, setRoomId] = useState('')
  const navigate = useNavigate();
  
  const handleClick =()=>{
    setName(profile.name);
    setRoom(roomId);  
      
  }
  
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoomId(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to="/chat">
          <button className={'button mt-20'} type="submit" onClick={handleClick}>Join</button>
        </Link>
      </div>
    </div>
  );
}
