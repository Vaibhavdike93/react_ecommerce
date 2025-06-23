import Navbar from "./comm/Navbar";
import Footer from "./comm/Footer";
import Productcard from "./comm/Productcard";
import { useEffect, useState } from "react";
import axios from "axios";

function Product(){

    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://a2zithub.org/dairy/abi/product_det").then((res)=>{
            setProducts(res.data);
        });

    },[])


    return(
        <>
        <Navbar />
        <br /><br />
        <h1 className="text-center">Products</h1>
        <br />

        <div className="container">
            <div className="row">
                { products.map((val,index)=> (
                <Productcard data={val} />                    
                ))}

                
            </div>
        </div>
        <Footer />
        </>
    )
};

export default Product;



 
                                     