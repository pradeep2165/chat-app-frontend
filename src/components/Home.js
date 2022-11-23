import React, { useState } from "react";
import image from "../images/Capture.PNG";
import { GetContext } from "../context/ContextState";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const {chatId, setChatId, message, setMessage  } = GetContext();
  const profile = JSON.parse(localStorage.getItem("profile"));

  const navigate = useNavigate();
    const handleJoin =async()=>{
      //  console.log(await chatWithExistingId(chatId));
      const response = await fetch("http://localhost:5000/posts/getChatId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId: chatId }),
      });
      const json = await response.json();
      if(json){
        setChatId(json?.chatId);
        navigate("/chat")
  
      }else{
        setMessage("click on create");
      }
      
    }

    
    const handleCreate =async()=>{
      // console.log(await chatWithNewId(chatId));
      const response = await fetch("http://localhost:5000/posts/createChatId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId: chatId }),
      });
      const json = await response.json();
      if(!json.message){
    
        console.log(json);
        navigate("/chat")
  
      }else{
        setMessage("try with new id")
      }
      
    }

    
  return (
    <div className=" bg-warning p-2 text-dark bg-opacity-75 justify-content-center">
{!profile && <div>
      <img src={image} alt="" />
      </div>
}      

{profile &&<div className="continer w-md-25 align-center col-md-4 margin-auto">
        <form className="m-auto border border-3 mt-5 pb-2">
          <div className="mb-3 text-center">
            {message &&<span>{message}</span>}
            <label  className="form-label" >
              Let's Chat
            </label>
            <input type="text" className="form-control" name="chatId" onChange={(e)=>setChatId(e.target.value)} aria-describedby="emailHelp"  placeholder="Join with existing /create new"/>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" onClick={handleJoin} className="btn btn-primary mx-2">
              Join
            </button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCreate}>
              Create New
            </button>
          </div>
        </form>
      </div>}
    </div>
  );
};

export default Home;
