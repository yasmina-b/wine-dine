import React from "react";
import "./HomePage.css" 
import Logo from "../../photos/logo.png"

const HomePage= ()=>{
    return(
        <div className="homepage">
           
           <div className="wraper">

                <div className="up">
                    <h1 className="companyname">Wine&Dine</h1> 
                    <img className="companyphoto"src={Logo}></img>
                </div>

                <div className="down">
                    <button className="loginbutton">Login</button>
                    <h1 className="descriptionhomepage">Don't have an account yet?</h1>
                    <button className="registerbutton">Sign Up</button>
                </div>
           </div>
        </div>
    )
}

export default HomePage