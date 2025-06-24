import { useState } from "react";
import Footer from "./comm/Footer";
import Navbar from "./comm/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Register()
{
    const [user_name, setUserName] = useState("");
    const [user_mobile, setUserMobile] = useState("");
    const [user_email, setUserEmail] = useState("");
    const [user_password, setUserPassword] = useState("");
    const navigate = useNavigate();

    function submitForm(event)
    {
      event.preventDefault();

      var obj = {"user_name":user_name,"user_mobile":user_mobile,"user_email":user_email,"user_password":user_password};
      axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((res) => {

        console.log(res.data);
        navigate("/login");
      })

    }

    return(
      <>
      <Navbar />
      <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Create Account</h2>
                <p className="text-muted">Looks like you're new here!</p>
              </div>
              <form action="" method="" onSubmit={submitForm} noValidate>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className={`form-control`} 
                    onChange={(e)=> {setUserName(e.target.value)}}
                    required 
                  />
                </div>

                 {/* Phone Field */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input 
                      type="tel" 
                      className={`form-control`} 
                      onChange={(e)=> {setUserMobile(e.target.value)}}
                      required 
                      maxLength="10"
                    />
                  </div>
                </div>


                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className={`form-control`} 
                    onChange={(e)=> {setUserEmail(e.target.value)}}
                    required 
                  />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className={`form-control`} 
                    onChange={(e)=> {setUserPassword(e.target.value)}}
                    required 
                  />
                  <small className="text-muted">At least 6 characters</small>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-2 mb-3"
                > Register Now
                </button>

                <div className="text-center mt-3">
                  <p className="text-muted mb-0">Already have an account? <a href="/login" className="text-decoration-none">Sign in</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />

      </>
    )
};

export default Register;