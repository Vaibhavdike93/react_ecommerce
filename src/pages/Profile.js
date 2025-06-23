import "../App.css"
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./comm/Navbar";
import Footer from "./comm/Footer";
import Order_list from "./Order_list";
function Profile(){

  const [profile,setprofile] = useState([])

    const navigate=useNavigate()

    function logout(){
       localStorage.removeItem("user_token");
       navigate("/login")
    }

    useEffect(()=>{
      var obj={"token":localStorage.getItem("user_token")}
      axios.post("https://a2zithub.org/dairy/abi/user_profile",obj).then((res)=>{
        setprofile(res.data.data[0])
        console.log(profile)
      })
    },[])

    return(<>
    <Navbar />


<div className="container py-5">
  <div className="row">
    <div className="col-lg-4 mb-4">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img rounded-circle mb-3 border border-3 border-primary"/>
          <h4 className="mb-2">{profile.user_name}</h4>
          <p className="text-muted mb-3">Frontend Developer | Coffee Enthusiast</p>
          <button className="btn btn-primary btn-sm">
            <i className="fas fa-edit me-1"></i> Edit Profile
          </button>
        </div>
      </div>
    </div>


    <div className="col-lg-8">
      <div className="card shadow-sm">
        <div className="card-header bg-white p-0">
          <ul className="nav nav-tabs p-3">
            <li className="nav-item">
              <a className="nav-link active" href="#profile" data-bs-toggle="tab">
                <i className="fas fa-user me-2"></i>Profile
              </a>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to={"/orderlist"} >
                <i className="fas fa-shopping-bag me-2"></i>Orders
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#settings" data-bs-toggle="tab">
                <i className="fas fa-cog me-2"></i>Settings
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="profile">
              <h5 className="mb-4">Personal Information</h5>

              <form>
                <div className="row mb-3">
                  <label className="col-sm-3 col-form-label">Full Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value={profile.user_name}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" value={profile.user_email}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3 col-form-label">Phone</label>
                  <div className="col-sm-9">
                    <input type="tel" className="form-control" value={profile.user_mobile}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3 col-form-label">Address</label>
                  <div className="col-sm-9">
                    <textarea className="form-control">123 Main St, New York, NY 10001</textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>

            <div className="tab-pane fade" id="settings">
              <h5 className="mb-4">Account Settings</h5>
              <form>
                <div className="mb-4">
                  <h6>Change Password</h6>
                  <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-control"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" className="form-control"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Update Password</button>
                </div>

                <div className="mb-3">
                  <h6>Notification Preferences</h6>
                  <div className="form-check form-switch mb-2">
                    <input className="form-check-input" type="checkbox" id="emailNotif" checked/>
                    <label className="form-check-label" for="emailNotif">Email Notifications</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="smsNotif"/>
                    <label className="form-check-label" for="smsNotif">SMS Notifications</label>
                  </div>
                </div>
              </form>
             <button onClick={()=>{logout()}} className="btn btn-primary">Log-Out</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer />  

    </>)
}

export default Profile;