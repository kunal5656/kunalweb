import React from 'react'
import './App.css'
function Contact() {
    return (
        <>
        <div className="container mt-5">
       
        <div className="row">
        <div className="col-lg-4 d-flex align-items-center justify-content-center">
             <img src="./images/img.svg"/>
        </div>
        <div className="col-lg-8 d-flex align-items-center justify-content-center flex-column" id="formcon">
        <h4 className="display-4">Contact us</h4>
        <hr className="w-25 myhr "/>
        <form >
            <div className="row">
            <div className="col-lg-6">
            <p className="">First Name</p>
            <input className="form-control" type="text" placeholder="Enter your FirstName"  required minLength="3" maxLength="16"/>
            </div>  
            <div className="col-lg-6">
            <p className="">Last Name</p>
            <input className="form-control" type="text" placeholder="Enter your LastName" required minLength="3" maxLength="16"/>
            </div>      
           </div>
           <p className="">Email</p>
            <input className="form-control" type="email" placeholder="Enter your Email" required />
            <p className="">Message</p>
            <textarea className="form-control" type="text" placeholder="Enter your Message" required minLength="3"></textarea><br />
            <button className="btn btn-primary w-100" type="submit" >Submit</button>
            <br/>
            <br/>
        </form>
                
            
        </div>
        </div>
    </div>
     
        </>
    )
}

export default Contact
