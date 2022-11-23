import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetContext } from "../context/ContextState";
import exportFromJSON from "export-from-json";

const Admin = () => {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile || profile.email !== "pradeep@gmail.com") {
    navigate("/auth", { replace: true });
  }

  const { getAllData, postData, getAllChatIds, allChatIds } = GetContext();
  useEffect(() => {
    getAllData();
    getAllChatIds();
  }, []);



  const downloadTxt=()=>{
    const data = [postData];
    const fileName = "download";
    const exportType = exportFromJSON.types.txt;
    exportFromJSON({ data, fileName, exportType })
  }
  const downloadXls=()=>{
    const data = [postData];
    const fileName = "download";
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, exportType })
  }
  const downloadCsv=()=>{
    const data = [postData];
    const fileName = "download";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType })
  }
  return (
    <div className=" container border border-2 mt-2 overflow-auto bg-success p-2 text-dark bg-opacity-10" >
      <img src="https://www.shutterstock.com/image-photo/african-businesswoman-using-analytics-data-kpi-1953455260" alt="" />
      {postData.map((data) => (
        <p key={data._id}>
          {new Date(data.createdAt).toLocaleString()}
          <span className="text-primary mx-2">{data.userId}</span>
          {data.userMsg}
        </p>
      ))}
  <div className="flex">
  <button className="btn btn-primary btn-sm mx-1" onClick={downloadTxt}>download in text</button>
      <button className="btn btn-primary btn-sm mx-1" onClick={downloadXls}>download in xls</button>
      <button className="btn btn-primary btn-sm mx-1" onClick={downloadCsv}>download in csv</button>

  </div>
    </div>
  );
};

export default Admin;

{
  /* {allChatIds.map((chat) =>
  postData
    .filter((x) => x.chatId == chat.chatId)
    .map((data) => (
      
      <p key={data.chatId}>{data.chatId }
        {new Date(data.createdAt).toLocaleString()}
        <span className="text-primary mx-2">{data.userId}</span>
        {data.userMsg}
      </p>
    ))
)} */
}
