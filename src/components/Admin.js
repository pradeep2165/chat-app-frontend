import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetContext } from "../context/ContextState";

const Admin = () => {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("profile"));
  
  if(!profile || profile.email !=="pradeep@gmail.com"){
    navigate("/auth", {replace: true})
  }

  const { getAllData, postData, getAllChatIds, allChatIds } = GetContext();
  useEffect(() => {
    getAllData();
    getAllChatIds();
  }, []);
  
  return (
    <div className="container border border-2 mt-5 overflow-auto">
      {postData.map((data)=>(
        <p key={data._id}>
        {new Date(data.createdAt).toLocaleString()}
        <span className="text-primary mx-2">{data.userId}</span>
        {data.userMsg}
      </p>
      ))}
    </div>
  );
};

export default Admin;

{/* {allChatIds.map((chat) =>
  postData
    .filter((x) => x.chatId == chat.chatId)
    .map((data) => (
      
      <p key={data.chatId}>{data.chatId }
        {new Date(data.createdAt).toLocaleString()}
        <span className="text-primary mx-2">{data.userId}</span>
        {data.userMsg}
      </p>
    ))
)} */}