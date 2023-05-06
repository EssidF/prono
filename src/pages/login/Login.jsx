import './Login.css'
import React, { useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import logo from './Logoo.png'
//const http = require('../../http')

    function login(email, pass)
    {
        
        const data = {email:email,password:pass}
        const loginUrl = 'https://idbella.herokuapp.com/api/login'
        // http('POST', loginUrl, data, (status, response) => {
        //     console.log(response)
        //     if (status === 404)
        //         console.log("invalid email/password")
        //     if (status === 500)
        //         console.log('server error try again')
        //     if (status === 400)
        //         console.log('invalid request data')
        //     if (status === 200 || status === 401)
        //     {
        //         console.log(`user ${email} is logged in`);
        //         window.location = '/home'
        //     }
        //     if (status === 401)
        //         console.log('an active session is already started [user is logged in]')
        // })
        window.location = '/home'
    }

    function click(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value
        validateInput(email, password, (err) => {
            if (err.email || err.password)
            {
                // if (err.password)

                // if (err.email)
                console.log("ïnvalid input")
                return
            }
            login(email, password)
        })
    }

    function validateInput(email, password, callback)
    {
        const passerr = password.length < 5
        const emailerr = email.length < 5
        return (callback({email:emailerr,password:passerr}))
    }

    function Login({history}) {

        if (localStorage.getItem('token'))
            window.location = '/home'
        // const [loggedInStatus,setLoggedInStatus] = useState("NOT_LOGGED_IN")
        return (
            <div className="base-container">
                <div className="split right ">
                    <div className="centered">
                        <img className="image" alt="logo" src={logo} />
                    </div>    
                </div>
                <div className="split  left ">
                    <div className= " centered">
                        <div className="header">Administarteur de Système </div>
                        <div className="label-div">
                            <label className="email"   htmlFor="email" >Adresse Email</label>
                        </div>
                        <input className="emailInput" id="email" type="text" name="email" ></input>
                        <div className="label-div">
                            <label  className="password" htmlFor="password">Mot de Passe </label>
                        </div>
                        <input className="passwordInput" id="password" type="password"></input>
                        <div className="checkBox">
                            <input  type="checkbox"  id="checkbox" name="remember"></input>
                            <label htmlFor="checkbox" >Remember me</label>
                        </div>
                        <div className="btn-div">
                            <button  className="sublog" type="button" onClick={click} >Login</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
}
export default Login