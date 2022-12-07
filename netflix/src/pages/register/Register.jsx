import React from 'react'
import './Register.scss'
import { useState, useRef } from 'react';

export default function Register() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const emailref = useRef();
    const passwordref = useRef();


    const handlestart = () =>{
        setemail(emailref.current.value)
    }

    const handlefinish = () =>{
        setpassword(passwordref.current.value)
    }
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">

            <img className="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
           
            <button className="loginbutton">Sign In</button>
            </div>
        </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere.Cancel anytime.</h2>
                <p>Ready to watch? Enter your email or create or restart your membership.</p>

                
                {/* we only see one type of the either two clauses if they have given their email then they can enter the password n start and if not then they dont give the email they cant see the password option */}
                {!email ? (

            <div className="input">
                <input type="email" placeholder="email address" ref={emailref} />
                <button onClick={handlestart} className="regbtn">Get Started</button>
                </div>
                  ) : 

            <form className="input">
                <input type="password" placeholder="password" ref={passwordref} />
                <button onClick={handlefinish} className="regbtn"> Start Membership</button>
            </form>
                  }
        </div>  
    </div>
  )
}
