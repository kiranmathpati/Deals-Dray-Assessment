import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Components/hover.css'
useEffect

const Start = () => {
    const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/verify')
    .then(result => {
      if(result.data.Status) {
        if(result.data.role === "admin") {
          navigate('/dashboard')
        } else {
          navigate('/employee_detail/'+result.data.id)
        }
      }
    }).catch(err =>console.log(err))
  }, [])

  return (
    <div id="loginform" className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div id="loginform1" className="p-3 rounded w-25 border loginForm">
        <h2 className="text-center">Login As</h2>
        <div id="admin" className="d-flex justify-content-between mt-5 mb-2">
         
          <button type="button"  className="btn btn-success" onClick={() => {navigate('/adminlogin')}}>
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
