import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetContext } from "../context/ContextState";
import exportFromJSON from "export-from-json";
import Alert from "./Alert";

const Admin = () => {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile || profile.email !== "pradeep@gmail.com") {
    navigate("/auth", { replace: true });
  }

  const { getAllData, postData, getAllChatIds, allChatIds, alert, setAlert } = GetContext();

  useEffect(() => {
    getAllData();
    getAllChatIds();
  }, []);

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const downloadTxt = () => {
    const data = [postData];
    const fileName = "download";
    const exportType = exportFromJSON.types.txt;
    exportFromJSON({ data, fileName, exportType });
  };
  const downloadXls = () => {
    const data = [postData];
    const fileName = "download";
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, exportType });
  };
  const downloadCsv = () => {
    const data = [postData];
    const fileName = "download";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };
  return (
    <div className="  mt-2 p-2 text-dark bg-opacity-10">
      {alert && <Alert/>}
      <h1>Admin</h1>

      <div className="d-flex container overflow-auto p-2">
        <div>
          <h1>Chat Data</h1>
          <div style={{ height: "400px" }} className="overflow-auto border border-2">
            {allChatIds.map((x) => (
              <div key={x._id}>
                
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={x._id}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#x-${x._id}`} aria-expanded="true" aria-controls="collapseOne">
                      <h6 className="text-info rounded text-center">{x.chatId}</h6>
                      </button>
                    </h2>
                    <div id={`x-${x._id}`} className="accordion-collapse collapse" aria-labelledby={x._id} data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {postData
                          .filter((y) => y.chatId == x.chatId)
                          .map((data) => (
                            <p key={data._id}>
                              {new Date(data.createdAt).toLocaleString()}
                              <span className="text-primary mx-2">{data.userId}</span>
                              {data.userMsg}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <button className="btn btn-primary btn-sm mx-1" onClick={downloadTxt}>
              download in text
            </button>
            <button className="btn btn-primary btn-sm mx-1" onClick={downloadXls}>
              download in xls
            </button>
            <button className="btn btn-primary btn-sm mx-1" onClick={downloadCsv}>
              download in csv
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
