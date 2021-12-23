import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyCart from './Cart/MyCart';
import AddProduct from './Product/AddProduct.js';
import ProductList from './Product/ProductList';
import Header from './Header/Header';

function App() {
  return (
   <Router>
     <div>
     <Header />
       <Switch>
         <Route path="/cart">
            <MyCart />
         </Route>
         <Route path="/AddProduct">
            <AddProduct />
         </Route>
         <Route path="/">
          <ProductList />
          {/* <div>hellop</div> */}
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
