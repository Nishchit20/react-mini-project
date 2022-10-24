import React, { Component } from "react";
import "../Styles/contact.css"
const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            error: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };

    formObject = event => {

        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ? "Name should be 5 characters long" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "password":
                error.password =
                    value.length < 5 ? "Password should 5 characters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
            <section className="contact">
                <div className="container-fluid p-0">
                    <div className="contact_container">
                    <h1 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "rgb(221,98,38)", textAlign: "center", paddingTop: "10px" }}>QUICK CONTACT</h1>
                        <form action="">
                            <div className="row">
                                <div className="col-md-4 " style={{ float: "left" }}>
                                    <div className="form-outline mb-4">
                                        <input required type="name" id="form4Example1" className="form-control" style={{ marginLeft: "100px", width: "300px" }} placeholder="Name" />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input required type="email" id="form4Example1" className={error.email.length > 0 ? "wrong_input" : "input"} onChange={this.formObject} placeholder="Email" style={{ marginLeft: "100px", width: "300px" }} />

                                        {error.email.length > 0 && (
                                            <span className="error">{error.email}</span>
                                        )}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input required type="password" id="form4Example1" className={error.password.length > 0 ? "wrong_input" : "input"} onChange={this.formObject} placeholder="password" style={{ marginLeft: "100px", width: "300px" }} />

                                        {error.password.length > 0 && (
                                            <span className="error">{error.password}</span>
                                        )}
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input required type="text" id="form4Example1" placeholder="Phone" className="input" style={{ marginLeft: "100px", width: "300px" }} />
                                    </div>
                                </div>

                                <div className="col-md-8 " style={{ float: "left" }}>
                                    <div className="col-md-12">
                                        <div className="md-form" style={{ marginRight: "200px" }}>
                                            <textarea type="text" id="message" name="message" className="form-control md-textarea" cols="100" rows="5" placeholder="Your message"></textarea>
                                            <label for="message"></label>
                                        </div>
                                    </div>
                                    <button type="submit" value="Submit" className="submit" style={{backgroundColor:"rgb(221,98,38)",color:"white",borderRadius:"0px", border:"none", height:"40px", width:"100px"}}>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

{/*import React from "react";
import form from "../form.jpg";

export default function Form() {
    return (
        <div style={{ height: "300px", backgroundColor: "blue" }}>
            <h1 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "rgb(221,98,38)", textAlign: "center", paddingTop: "10px" }}>QUICK CONTACT</h1>

            <div className="row" >
                <div className="col-md-12" >
                    <form >
                        <div className="col-md-4 " style={{float:"left"}}>

                            <div className="form-outline mb-4">
                                <input type="text" id="form4Example1" className="form-control" style={{marginLeft:"100px", width:"300px"}} placeholder="Name"/>
                                <label className="form-label" for="form4Example1"></label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="email" id="form4Example2" className="form-control" style={{marginLeft:"100px", width:"300px"}} placeholder="Email address"/>
                                <label className="form-label" for="form4Example2"></label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="phone" id="form4Example2" className="form-control" style={{marginLeft:"100px", width:"300px"}} placeholder="Phone"/>
                                <label className="form-label" for="form4Example2"></label>
                            </div>
                        </div>

                        <div className="col-md-8 " style={{float:"left"}}>
                            <div className="col-md-12">
                                <div className="md-form" style={{marginRight:"200px"}}>
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" style={{height:"150px"}}  placeholder="Your message"></textarea>
                                    <label for="message"></label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" style={{backgroundColor:"rgb(221,98,38)",color:"white",borderRadius:"0px", border:"none", height:"40px", width:"100px"}}>Send</button>
                    </form>
                </div>
            </div>

        </div>
    );
}
*/}
