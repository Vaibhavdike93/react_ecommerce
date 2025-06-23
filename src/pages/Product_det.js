import { Link, useParams } from "react-router-dom";
import Footer from "./comm/Footer";
import Navbar from "./comm/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Product_det() 
{
    var { product_id } = useParams();
    var [product_info, setProductInfo] = useState([])
    useEffect(() => {
        var obj = {"product_id":product_id, "token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res) =>{
            setProductInfo(res.data);
        })

    },[])

    function add_to_cart()
    {
        var obj = {"product_id":product_id, "token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((res)=>{
            console.log(res.data);
            window.location.reload();
        })
    }

    return (
        <>
            <Navbar />
                <div className="container">
                    <br /><br />
                    <h1 className="text-center">Product Details {product_id}</h1>
                    <br /><br />
                    <div className="row g-4">
                        {/* Image Gallery */}
                        <div className="col-lg-6">
                            <div className="border rounded-3 overflow-hidden bg-white p-3">
                                <img src={product_info.product_img} className="img-fluid rounded-3 mb-3" alt="Main Product" />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h1 className="mb-3">{product_info.product_name}</h1>
                                
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

                                <h3 className="mb-3">&#8377; {product_info.price} /-<span className="badge bg-danger ms-2">30% OFF</span></h3>
        
                                <hr className="my-4" />

                                <h5 className="mb-3">Key Features</h5>
                                <ul className="list-unstyled mb-4">
                                    <li><i className="fas fa-check text-success me-2"></i>Category: {product_info.cat_name} </li>
                                </ul>

                                <div className="d-flex gap-3 mb-4">
                                    { product_info.cart == 'No' ?
                                    <button className="btn btn-primary flex-grow-1 py-3" onClick={add_to_cart}>
                                        <i className="fas fa-shopping-cart me-2"></i> Add To Cart
                                    </button> : '' }

                                    
                                  
                                    <Link to={"/cart"}  className="text-decoration-none text-light">
                                        { product_info.cart == 'Yes' ?
                                        <button className="btn btn-success flex-grow-1 py-3">
                                            <i className="fas fa-bolt me-2"></i> Continue With Cart
                                        </button> : '' }
                                    </Link>   
                                  
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            <Footer />
        </>
    )
}

export default Product_det;