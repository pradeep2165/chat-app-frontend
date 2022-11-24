import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GetContext } from "../context/ContextState";

const Auth = () => {
  const initialState = { name: "", email: "", password: "" };
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {setAlert} = GetContext();
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (profile) {
    navigate("/home", { replace: true });
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignUp((x) => !x);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const json = await response.json();
      if (!json.message) {
        localStorage.setItem("profile", JSON.stringify(json.result));
        localStorage.setItem("token", JSON.stringify(json.token));
        navigate("/home", { replace: true });
        setAlert(true)
      } else {
        setMessage(json.message);
      }
    } else {
      const response = await fetch("http://localhost:5000/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const json = await response.json();
      if (!json.message) {
        localStorage.setItem("profile", JSON.stringify(json.result));
        localStorage.setItem("token", JSON.stringify(json.token));
        navigate("/home", { replace: true });
        setAlert(true)
      } else {
        setMessage(json.message);
      }
    }
  };
  const adminLogin = async () => {
    const response = await fetch("http://localhost:5000/user/adminSignin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const json = await response.json();
    if (!json.message) {
      localStorage.setItem("profile", JSON.stringify(json.result));
      localStorage.setItem("token", JSON.stringify(json.token));
      setAlert(true)
      navigate("/admin", { replace: true });
    } else {
      setMessage(json.message);
    }
  };

  return (
    <div className="container-md col-md-3 bg-warning ">
      <form className="mt-5 border border-primary p-3 rounded bg-dark text-light" onSubmit={handleSubmit}>
        {message && <span>{message}</span>}
        {isSignUp ? <h1>SignUp</h1> : <h1>Login</h1>}
        {isSignUp && (
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" aria-describedby="" onChange={handleChange} />
            <div id="emailHelp" className="form-text"></div>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">
          {isSignUp ? "Save" : "User login"}
        </button>
        {!isSignUp && (
          <button type="button" className="btn btn-danger mx-2" onClick={adminLogin}>
            Admin login
          </button>
        )}
        <p className=" mx-2">
          {!isSignUp ? "Don't have" : "Have"} account{" "}
          <span className="text-primary" onClick={switchMode}>
            click
          </span>{" "}
          here
        </p>
      </form>
    </div>
  );
};

export default Auth;
