
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Registration';
import Product from './pages/Product';
import Product_det from './pages/Product_det';
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order_list from './pages/Order_list';
import Order_details from './pages/Order_details';
import Profile from './pages/Profile';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={ <Home />} ></Route>
        <Route path='/login'  element={ <Login />} ></Route>
        <Route path='/register'  element={ <Register />} ></Route>
        <Route path='/products'  element={ <Product />} ></Route>
        <Route path='/product_det/:product_id'  element={ <Product_det /> } ></Route>
        <Route path='/cart'  element={ <Cart />} ></Route>
        <Route path='/checkout'  element={ <Checkout />} ></Route>
        <Route path='/orderlist'  element={ <Order_list />} ></Route>
        <Route path='/order_details/:order_id'  element={ <Order_details />} ></Route>
        <Route path='/profile'  element={ <Profile />} ></Route>


        
      </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;


