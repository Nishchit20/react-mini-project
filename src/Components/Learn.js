import React from "react";
import { Button } from "react-bootstrap";

export default function Learn(){
    return(
        <div>

            
            <div style={{width:"50%",height:"300px",backgroundColor:"rgb(221,98,38)",float:"left",color:"white",textAlign:"center"}}>
                <h3 style={{paddingTop:"20px"}}>Fresh Investment Solutions!</h3>
                <ul>
                    <li>Dolor sit amet,consectetur adipisicing</li>
                    <li>Sed do eiusmod tempor incididunt ut labore</li>
                    <li>Et dolore magna aliquat enim ad minim eniam</li>
                    <li>Duis nostrud exercitation ullamco laboris</li>
                    <li>EX ea commodo consequat</li>
                </ul>
                <Button style={{backgroundColor:'transparent', borderRadius:'0px', border:"1px solid white",color:'white'}}>Learn More</Button>
            </div>


            <div style={{width:"50%",height:"300px",backgroundColor:"rgb(65,76,80)",float:"left",color:"white", textAlign:"center"}}>
            <h3 style={{paddingTop:"20px"}}>Learning to Save Money</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet,consectetur adipisicing</li>
                    <li>Sed do eiusmod tempor incididunt ut labore</li>
                    <li>Ut enim ad minim veniam quis nostrud exercitation</li>
                    <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud excercitation ullamco lboris nisi ut aliquip</p>
                </ul>
                <Button style={{backgroundColor:'transparent', borderRadius:'0px', border:"1px solid white",color:'white'}}>Learn More</Button>
            </div>
        </div>
    );
}