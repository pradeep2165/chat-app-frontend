import React, { useEffect, useState } from "react";
import { GetContext } from "../../context/ContextState";
import TextContainer from "../TextContainer/TextContainer";
import { useNavigate } from "react-router-dom";

import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import "./Chat.css";

const Chat = () => {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile) {
    navigate("/", { replace: true });
  }

  const userid = profile?.email;
  const name = profile?.name
  const { getPost, postData, createPost, aUsers, activeUsers } = GetContext();
  const [message, setMessage] = useState("");
  const chatId = localStorage.getItem('chatId');
  useEffect(() => {
    getPost(chatId);
    activeUsers();
  }, [postData]);

  const sendMessage = (event) => {
    event.preventDefault();
    createPost({ chatId: chatId, userId: userid, userMsg: message });
    setMessage("");
  };

  return (
    
    <div className="outerContainer">
      <div className="container p-1">
        <InfoBar room={userid} />
        <Messages messages={postData} name={userid} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={aUsers} />
    </div>
  
  );
};

export default Chat;
