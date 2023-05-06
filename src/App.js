import React from "react";

import Dashbord from "./pages/dashbord/Dashbord";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Support from "./pages/support/support";
import Profil from "./pages/profil/profil";
import Email from "./pages/email/Email";
import EmailListe from "./pages/emailListe/EmailList";
import Login from "./pages/login/Login";

//import './App.css'

function App() {
  return (
    
 
    <BrowserRouter basename='/'>
       
     
          <Routes>
         
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Dashbord />}  />
          <Route path="/customer-list" element={<UserList />} />
          <Route path="/support" element={<Support />} />
          <Route path="/email-liste" element={<EmailListe />} />
          <Route path="/profil/:userId" element={<Profil />} />
          <Route path="/email/:userId" element={<Email />} />
          <Route path="/customer-edit/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
    
        
    </BrowserRouter>
    
  );
}

export default App;