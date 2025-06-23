import { useEffect, useState } from "react";
import Footer from "./comm/Footer";
import Navbar from "./comm/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart()
{
    const [products, setProducts] = useState([]);
    function getProduct()
    {
        var obj = {"token":localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/cart_list",obj).then((res)=>{
            setProducts(res.data);
        });
    }
    useEffect(()=>{
        getProduct();
    },[]);


    function remove_cart_qty(product_econ_cart_id)
    {
        var obj = {"product_econ_cart_id":product_econ_cart_id,"token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj).then((res)=>{
            getProduct();
        });
    }

    const getTotalPrice = () => {
        return products.reduce((total, val) => total + (val.qty * val.price), 0);
    };

    function dec_cart_qty(product_econ_cart_id){
        var obj = {"product_econ_cart_id":product_econ_cart_id,"token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj).then((res)=>{
            getProduct();
        });

    }

    function inc_cart_qty(product_econ_cart_id){
        var obj = {"product_econ_cart_id":product_econ_cart_id,"token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj).then((res)=>{
             getProduct();
        });

    }
    return(
        <>
        <Navbar />
        <br />
        <div className="container py-5">
      <h1 className="text-center mb-4">🛒 Your Cart</h1>
      <br />

      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price (₹)</th>
              <th>Quantity</th>
              <th>Subtotal (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((val, index)=>(
            <tr>
              <td>
                <img src={val.product_img} alt="Product" width="100" height="100" className="rounded" />
              </td>
              <td>{val.product_name}</td>
              <td> &#8377; {val.price}</td>
                <td className="d-flex justify-content-center align-items-center gap-2">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => dec_cart_qty(val.product_econ_cart_id)}>-</button>
                    <input type="text" className="form-control text-center" style={{ width: '60px' }} value={val.qty} readOnly />
                    <button className="btn btn-outline-secondary" type="button" onClick={() => inc_cart_qty(val.product_econ_cart_id)}>+</button>
                </td>

              <td> &#8377; {val.qty * val.price}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => remove_cart_qty(val.product_econ_cart_id)}>&#10005; Remove</button>
              </td>
            </tr>

            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="4" className="text-end fw-bold">Total:</td>
             <td className="fw-bold">&#8377; {getTotalPrice()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="text-center mt-4">
        <Link to={"/checkout"} className="text-decoration-none">
        <button className="btn btn-success me-2">Proceed to Checkout</button>
        </Link>

        
        <Link to={"/products"} className="text-decoration-none">
        <button className="btn btn-secondary">Continue Shopping</button>
        </Link>
      </div>
    </div>
        <br />
        <Footer />
        </>
    )
};

export default Cart;

