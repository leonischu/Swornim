import React, { useState } from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between Login and Signup

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isSignup ? "Sign Up" : "Login"}</h1>
        <div className="loginsignup-fields">
          {isSignup ? (
            <>
              <div className="input-container">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
            </>
          ) : (
            <>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-container">
                <i className="fa fa-phone"></i>
                <input type="text" placeholder="Phone Number" />
              </div>
               <div className="input-container">
               <i className="fa fa-globe"></i>
  <select>
    <option value="">Select Your Country</option>
    <option value="us">United States</option>
    <option value="nepal">Nepal</option>
    <option value="india">India</option>
  </select>
</div>

            </>
          )} 
        </div>
        <button>{isSignup ? "Continue" : "Login"}</button>
        <p className="loginsignup-login">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login here</span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Sign Up</span>
            </>
          )}
        </p>
        {isSignup && (
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
};
