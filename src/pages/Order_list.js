import Navbar from "./comm/Navbar";
import Footer from "./comm/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Order_list()
{
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        var obj = {"token":localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/order_list",obj).then((res)=>{
            setOrders(res.data.order_det);
        });
    })
  
    return(
        <>
        <Navbar />
        <br />
        <div className="container py-5">
                <div className="row">
                    <h1 className="text-center mb-4">📦 My Orders</h1>
                    <br />
                        {orders.map((order, index) => (
                            <div className="col-md-4">
                            <div className="card mb-3 shadow-sm" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">
                                🧾 Order ID: <span className="text-primary">{order.product_order_id}</span>
                                </h5>

                                <p className="card-text mb-1"><strong>Order Date:</strong> {order.entry_date}</p>

                                <p className="card-text mb-1"><strong>Address:</strong><br />
                                {order.area}, {order.city}, {order.district},<br />
                                {order.state}, {order.country} - {order.pincode}
                                </p>

                                <p className="card-text fw-bold text-success">Total Amount: ₹{order.ttl_amount}</p>

                                <Link to={'/order_details/'+order.product_order_id} >
                                <button className="btn btn-outline-primary">
                                    View Details
                                </button>
                                </Link>
                                
                            </div>
                            </div>
                            </div>
                ))}
            </div>


      </div>
  
    
        <br />
        <Footer />
        </>
    )
}

export default Order_list;
      

 