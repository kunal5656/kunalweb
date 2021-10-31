import React,{useState} from 'react'
import howapi from './howapi'
import './App.css';
function How() {

    const [workdata, setworkdata ] = useState(howapi);
    return (
        <>
            <div className="container bg-white text-dark mycont"><br/>
                <h4 className="text-center b1" >How it Works?</h4>
                <div className="row">
                    {
                        workdata.map((curr) => {
                            const {id, title, info} = curr;
                            return(
                            <>
                            
                            <div className="col-4 text-center d-flex flex-column justify-content-center align-content-center  "><br/>
                                    <h4 className="text-center"><i class="fas-fa-download"></i></h4>
                                     <h6 className="text-center">{title}</h6>
                                     <hr className="bg-dark hr1"/>
                                     <p className="text-muted mx-2 mt-2" id="text">{info}</p>
                                     <br/>
                                     </div> 
                    
                            </>
                            );
                        })
                    }
                   
                </div>    
            </div>  
        </>
    )
}

export default How
