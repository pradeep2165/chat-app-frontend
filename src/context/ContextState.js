import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

const ContextState = ({ children }) => {
  const [chatId, setChatId] = useState("");
  const [message, setMessage] = useState("");
  const [postData, setPostData] = useState([]);
  const [allChatIds, setAllChatIds] = useState([]);
  const [aUsers, setAUsers] = useState([]);

  // const chatWithExistingId = async (id) => {
  //   const response = await fetch("http://localhost:5000/posts/getChatId", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ chatId: id }),
  //   });
  //   const json = await response.json();
  //   if (json) {
  //     setMessage("");
  //     return setChatId(json?.chatId);
  //   } else {
  //     setMessage("click on create");
  //   }
  // };

  // const chatWithNewId = async (id) => {
  //   const response = await fetch("http://localhost:5000/posts/createChatId", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ chatId: id }),
  //   });
  //   const json = await response.json();
  //   if (!json.message) {
  //     setMessage("");
  //     return setChatId(json?.chatId);
  //   } else {
  //     setMessage("click on join or try new id");
  //   }
  // };
  const getPost = async (id) => {
    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId: id }),
    });
    const json = await response.json();
    setPostData(json);
  };
  const createPost = async (data) => {
    const response = await fetch("http://localhost:5000/posts/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();

  };
  const getAllData = async () => {
    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPostData(json);
  };
  const getAllChatIds = async () => {
    const response = await fetch("http://localhost:5000/posts/getAllChatId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setAllChatIds(json);
  };
  const modifyStatus = async (id) => {
    const response = await fetch("http://localhost:5000/user/updateStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    
  };
  const activeUsers = async (id) => {
    const response = await fetch("http://localhost:5000/user/activeUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setAUsers(json.result)
  };
  return <ContextApi.Provider value={{ chatId, setChatId, message, setMessage, getPost, postData, createPost, getAllData, getAllChatIds, allChatIds, modifyStatus, aUsers, activeUsers }}>{children}</ContextApi.Provider>;
};

export const GetContext = () => useContext(ContextApi);
export default ContextState;
