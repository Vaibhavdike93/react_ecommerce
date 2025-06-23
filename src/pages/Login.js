import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './comm/Navbar';
import Footer from './comm/Footer';
import axios from 'axios';


function Login()
{

  const [user_mobile, setUserMobile] = useState('');
  const [user_password, setUserPassword] = useState('');
  const  navigate = useNavigate();

  function LoginProcess(event)
  {
    event.preventDefault();
    var obj = {"user_mobile":user_mobile,"user_password":user_password};
    axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{
      if(res.data.status == 'success')
      {
        // alert("Login Success");
        localStorage.setItem("user_token",res.data.token);
        navigate("/products");

      }
      else
      {
        alert("Invalid Username Password");
      }
    });
  }

  return(
    <>
    <Navbar />

      <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3">Welcome Back</h3>
        <p className="text-center text-muted mb-4">Please enter your details to Login</p>

        <form onSubmit={LoginProcess}>
          <div className="mb-3">
            <label htmlFor="Phone" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUserMobile(e.target.value)}
              required
              placeholder="Enter Phone Number"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setUserPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
            <small className="text-muted">At least 6 characters</small>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login Now
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don't have an account?{' '}
            <Link to="/register" className="text-decoration-none">Sign up</Link>
          </small>
        </div>
      </div>
    </div>


    <Footer />



    </>
  )
};

export default Login;