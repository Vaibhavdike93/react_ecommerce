import Navbar from "./comm/Navbar";
import Footer from "./comm/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Checkout() 
{
    const navigate = useNavigate();
    const [area,setArea] = useState("");
    const [city,setCity] = useState("");
    const [district,setDistrict] = useState("");
    const [state,setState] = useState("");
    const [country,setCountry] = useState("");
    const [pincode,setPincode] = useState("");
    const [payment_type,setPaymentType] = useState("");


    function palce_order(event)
    {
        event.preventDefault();

        var obj = {"area":area,"city":city,"district":district,"state":state,"country":country,"pincode":pincode,"payment_type":payment_type,"token":localStorage.getItem('user_token')};

        axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((res)=>{
            navigate("/orderlist")
        });
    }

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

    const getTotalPrice = () => {
        return products.reduce((total, val) => total + (val.qty * val.price), 0);
    };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4"> Secure Checkout</h2>

        <div className="row">
            <div className="col-md-6">
                <form  onSubmit={palce_order} className="border p-4 rounded bg-light shadow-sm">

                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Area</label>
                        <input type="text" className="form-control" onChange={(e)=> setArea(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" onChange={(e)=> setCity(e.target.value)} required />
                    </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">District</label>
                        <input type="text" className="form-control" onChange={(e)=> setDistrict(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">State</label>
                        <input type="text" className="form-control" onChange={(e)=> setState(e.target.value)} required />
                    </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Country</label>
                        <input type="text" className="form-control" onChange={(e)=> setCountry(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Pincode</label>
                        <input type="text" className="form-control" onChange={(e)=> setPincode(e.target.value)} required />
                    </div>
                    </div>

                    <div className="mb-4">
                    <label className="form-label">Payment Type</label>
                    <select className="form-select"  onChange={(e)=> setPaymentType(e.target.value)} required>
                        <option>Select Payment Type</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="upi">UPI</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="netbanking">Net Banking</option>
                    </select>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Place Order</button>

                </form>
            </div>

          <div className="col-md-6">
            <div className="border p-4 rounded bg-white shadow-sm">
              <h4 className="text-center">Order Summary</h4>
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                 {products.map((val, index)=>(
                <tr>
                    <td>{val.product_name}</td>
                    <td>{val.qty}</td>
                    <td> &#8377; {val.qty * val.price}</td>
            </tr>
            ))}
                  <tr className="fw-bold">
                    <td colSpan="2" className="text-end">Grand Total:</td>
                    <td className="fw-bold">&#8377; {getTotalPrice()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
