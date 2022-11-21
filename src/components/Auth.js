import React, { useState } from "react";

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const switchMode =()=>{
        setIsSignUp((x)=>!x)
    }
  return (
    <div className="container col-md-3 " >
      <form className="mt-5 border border-primary p-3 rounded bg-dark text-light" >
        {isSignUp ? <h1>SignUp</h1>:<h1>Login</h1>}
        {isSignUp && <div className="mb-3 ">
          <label for="Name" className="form-label">
            Name
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">
          </div>
        </div>}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">
           {isSignUp ?'Save' : "User login"}
        </button>
        <button type="submit" className="btn btn-danger mx-2">
          Admin login 
        </button>
        <p className=" mx-2">{!isSignUp ? "Don't have":"Have"} account <span className="text-primary" onClick={switchMode}>click</span> here</p>
        
      </form>
    </div>
  );
};

export default Auth;
