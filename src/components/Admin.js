import React, { useEffect } from "react";
import { GetContext } from "../context/ContextState";
const Admin = () => {
  const { getAllData, postData, getAllChatIds, allChatIds } = GetContext();
  useEffect(() => {
    getAllData();
    getAllChatIds();
  }, []);
  console.log(allChatIds);

  console.log(postData);
  return (
    <div className="container border border-2 mt-5 overflow-auto">
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
      {postData.map((data)=>(
        <p key={data.chatId}>
        {new Date(data.createdAt).toLocaleString()}
        <span className="text-primary mx-2">{data.userId}</span>
        {data.userMsg}
      </p>
      ))}
    </div>
  );
};

export default Admin;
