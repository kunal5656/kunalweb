import React,{useState} from 'react'
import Aboutapi from './Aboutapi'
import Supportapi from './Supportapi'
import './App.css'
function About(props) {

    const [Aboutdata, setAboutdata] = useState(Aboutapi);
    const [Supportdata, setSupportdata] = useState(Supportapi);
    return (
        <>
            <br/>
            <div className="container-fluid bg-white text-dark mt-5 ">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center"><br/>
                        <img src="./images/Mobile02.svg" className="mt-5" height="600px" width="350px"/>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="b1 mt-5">How to use the App?</h4>
                        <hr className="w-50 myhr"/>
                        {
                            Aboutdata.map((curr)=>{
                                const {id,num, title, info} = curr;
                                return (
                                    <>
                                         <div className="col-2">
                                            <p className="bor mt-5">{num}</p>
                                        </div>
                                        <div className="col-10">
                                            <h6 className="text-dark">{title}</h6>
                                             <p className="text-muted tex">{info}</p>
                                      </div>
                                    </>
                                )
                            })
                        }
                    
                       
                
                    </div>
                </div>
            </div>
        </>
    )
}
export default About