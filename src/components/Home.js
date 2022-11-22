import React, { useState } from "react";
import image from "../images/Capture.PNG";
import { GetContext } from "../context/ContextState";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { chatWithExistingId, chatWithNewId, message, chatId:id } = GetContext();
  const navigate = useNavigate();
  const [chatId, setChatId] = useState();

    const handleJoin =async()=>{
       console.log(await chatWithExistingId(chatId));
    }
    const handleCreate =async()=>{
      console.log(await chatWithNewId(chatId));
    }

    
  return (
    <div className=" bg-warning p-2 text-dark bg-opacity-75 d-flex">
      {/* <div>
      <img src={image} alt="" />
      </div> */}
      <div className="">
        <form className=" justify-content-center border border-3 mt-5 w-md-25 pb-2">
          <div className="mb-3 text-center">
            <label  className="form-label" >
              Let's Chat
            </label>
            <input type="text" className="form-control" name="chatId" onChange={(e)=>setChatId(e.target.value)} aria-describedby="emailHelp"  placeholder="Join with existing /create new"/>
          </div>
          <div className="d-flex">
            <button type="button" onClick={handleJoin} className="btn btn-primary mx-2">
              Join
            </button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCreate}>
              Create New
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
