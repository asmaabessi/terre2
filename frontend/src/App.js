import React from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import image from './images/logo.png'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';


function App() {
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
  const  openMenu = () => {
    document.querySelector(".sidebar").classList.add("open"); 
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div>
            <img className="logo" src={image} /> 
                <div className="side-bar">
                  <button  onClick={openMenu}>
                  &#9776;
                  </button>
                </div> 
           
             </div> 
    
            
            <div className="brand">
                <Link to="/"> terre d'utique</Link>
                
            </div>
            <div className="header-links">
                <a href="cart">panier</a>
                {
                  userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                  <Link to="/signin"></Link>
                  
                }
                <a href="signin">connecter</a>
              
                

            </div>
        </header>
        <aside className="sidebar">
            <h3>les catégories</h3>
             <button className="sidebar-close-button" onClick={closeMenu}> x </button>
            <ul>
                <li>
                    <a href="index.html">huile d'olive</a>
                </li>
                <li>
                    <a href="index.html">epicerie fine</a>
                </li>
            </ul>
        </aside>

        <main className="main">
            <div className="content">
            <Route path="/products" component={ProductsScreen} />
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen } />
              <Route path="/product/:id" component ={ProductScreen} />
              <Route path="/cart/:id?" component ={CartScreen} />
              <Route path="/" exact={true} component ={HomeScreen} />
             
            </div>

        </main>

        <footer className="footer">tous les droits sont réservés. </footer>


    </div>
    </BrowserRouter>
  );
}

export default App;
