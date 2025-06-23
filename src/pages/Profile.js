import Footer from "./comm/Footer";
import Navbar from "./comm/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile()
{
    const [profile, setProfile] = useState([]);
     useEffect(()=>{
        var obj = {"token":localStorage.getItem("user_token")};
        axios.get("https://a2zithub.org/dairy/abi/user_profile",obj).then((res)=>{
            console.log(res.data);
            // setProfile(res.data);
        });
    })
    return(
        <>      
        <Navbar />
            <div className="container py-5">
                <h2 className="mb-4 text-center">👤 My Profile {profile.user_name}</h2>

                <form className="border rounded p-4 bg-light shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="user_name" className="form-control" value={profile.user_name} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="user_email" className="form-control" value={profile.user_email} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="text" name="user_mobile" className="form-control" value={profile.user_mobile} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="user_password" className="form-control" value={profile.user_password} required />
                </div>

                <button type="submit" className="btn btn-primary w-100">Update Profile</button>
                </form>
            </div>
             
        <Footer />
        </>
    )
};

export default Profile;
