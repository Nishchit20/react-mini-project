import React from "react";

export default function Contact() {
    return (
        <div style={{ height: "150px", width: "100%", backgroundColor: "rgb(83,92,99)" }}>
            <div className=" text-center">

                <div className="row">
                    <div className="col col-md-12">
                        <div className="row">
                            <div className="col col-md-4" style={{paddingTop:"35px",paddingLeft:"200px"}}>
                                <i class="fas fa-map-marker-alt fa-2x" style={{color:"rgb(221,98,38)"}}></i>
                                <p style={{color:"white"}}>NEW YORK 9870 ST VINCENT GLASGOW</p>
                            </div>
                            <div className="col col-md-4" style={{paddingTop:"10px",textAlign:"center",color:"white"}}>
                                <i className="fas fa-envelope mt-4 fa-2x" style={{color:"rgb(221,98,38)"}}></i>
                                <p style={{color:"white"}}>CONTACT@DEMOLINK.ORG</p>
                            </div>
                            <div className="col col-md-4" style={{paddingTop:"10px",paddingRight:"250px",color:"white"}}>
                                <i className="fas fa-phone mt-4 fa-2x" style={{color:"rgb(221,98,38)"}}></i>
                                <p style={{color:"white"}}>CALL US:<br></br>+1 800 603 6035
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}