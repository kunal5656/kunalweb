import React from 'react'
function Header() {
    return (
        <>
        <header>
            <section className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column align-content-center order-first">
                     <h1 className="b1 display-2">Online Payment </h1> 
                     <h3 className="b1 display-4"> made easy for you</h3>
                     <p>
                     Lorem Ipsum is simply dummy text of the print publishing software like <br/> Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                     <h5 className="b1">Get Notifications Now!</h5>
                    <div className="input-group my-3 w-75">
                        <form>
                        <input className="form-control "  placeholder="Enter your email" required type="email"/>
                        <button type="submit" className="btn btn-primary mycss mt-2">Submit</button>
                        </form>
                     </div>  
                     </div> 
                     <div className="col-lg-5 d-flex justify-content-center flex-column align-content-center order-last">
                        <img src="./images/img.svg" />     
                    </div>
                </div>
            </section>
        </header>
            
        </>
    )
}

export default Header
