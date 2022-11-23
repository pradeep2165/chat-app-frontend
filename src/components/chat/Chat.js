import React, { useEffect, useState } from "react";
import { GetContext } from "../../context/ContextState";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import TextContainer from '../TextContainer/TextContainer';
import { useNavigate } from "react-router-dom";

const Chat = () => {
const navigate = useNavigate();
const profile = JSON.parse(localStorage.getItem("profile"));
  if(!profile){
    navigate("/", {replace: true})
  }
  const {chatId} = GetContext();
  const userid = profile?.email;
  const { getPost, postData, createPost } = GetContext();
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    getPost(chatId);
  }, [postData]);
  
  const sendMessage = (event) => {
    event.preventDefault();
    createPost({chatId:chatId, userId: userid, userMsg:message})
  };
  
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={userid} />
        <Messages messages={postData} name={userid} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={[{"name":'pradeep', 'name': 'kalia'}]}/> */}
    </div>
  );
};

export default Chat;
