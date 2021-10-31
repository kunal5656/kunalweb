import React from 'react'
import './App.css'
import $ from 'jquery';
import {useEffect} from 'react'
function Navbar() {
      useEffect(() => {
       $("#nav1").on("mouseover",function()
       {
          $("#nav1").animate({fontSize: "30px"},"slow");
       })
       $("#nav1").on("mouseout", function()
       {
        $("#nav1").animate({fontSize: "20px"},"slow");
       }
       )
       $("#button1").on("click", function()
       {
        $("#n1").slideToggle("slow");
       }
       )
      }, []);

    return (
        <>
    <nav class="navbar navbar-expand-lg navbar-light " id="hello">
    <div class="container">
    <a class="navbar-brand" id="nav1" href="#">Kunal Payment App</a>
    <button class="navbar-toggler" type="button" id="button1">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="n1">
      <ul class="navbar-nav  ms-auto mb-1 mb-0">
        <li class="nav-item">
          <a class="nav-link mx-2 my-2 " id="text" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 my-2" id="text" href="#">About</a>
        </li>
        <li class="nav-item ">
         <a href="#" id="text" className="nav-link mx-2 my-2 ">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 my-2 " id="text" href="#">Contact</a>
        </li>
        <li class="nav-item">
        <button type='button' className="btn btn-primary text-center text-white mx-4 my-2 w-75" id="b1">Login</button>
        </li>
        <li class="nav-item">
        <button type='button' className="btn btn-outline-secondary text-center  mx-4  my-2 w-75" id="b1">Signup</button>
        </li>
      </ul>
    </div>
    </div>
</nav>
        </>
    )
}

export default Navbar
