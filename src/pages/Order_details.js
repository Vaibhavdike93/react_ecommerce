import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./comm/Navbar";
import Footer from "./comm/Footer";

function Order_details()
{
    const {order_id} = useParams();
    const [orderdet, setOrderDet] = useState([]);
    useEffect(() => {
        var obj = {"order_id":order_id, "token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/order_det",obj).then((res) =>{
            setOrderDet(res.data.order_products);
            
        })

    },[])
    return(
        <>
            <Navbar />
            <h1 className="text-center">Your Order Details{ order_id}</h1>
            <div className="container py-5">
                <h1 className="mb-4 text-center">🧾 Order Details</h1>
                  <div className="row">
                        {orderdet.map((val,index)=>(
                            <div className="col-md-4">
                                <h5>Order ID: <span className="text-primary">{val.order_id}</span></h5>
                                <div className="border rounded-3 overflow-hidden bg-white p-3">
                                    <img src={val.product_img} className="img-fluid rounded-3 mb-3" alt="Main Product" />
                                </div>
                                    <h1 className="mb-3">{val.product_name}</h1>
                                    
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="text-warning me-2">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="text-muted">4.2/5 (125 reviews)</span>
                                        <span className="badge bg-success ms-3">In Stock</span>
                                    </div>

                                    <h3 className="mb-3">&#8377; {val.price} /-<span className="badge bg-danger ms-2">30% OFF</span></h3>
                        </div>
                        ))}
                        
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Order_details;