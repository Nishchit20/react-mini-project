import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Haber.jpg';


export default function Navbar() { 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <img src={logo} style={{ height: 75, width: 200,  }}></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <span className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
                            </span>
                            <span className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </span>
                            <span className="nav-item">
                                <Link className="nav-link" to="services">Services</Link>
                            </span>
                            <span className="nav-item">
                                <Link className="nav-link" to="projects">Projects</Link>
                            </span>
                            <span className="nav-item">
                                <Link className="nav-link" to="blog">Our Blog</Link>
                            </span>
                            <span className="nav-item">
                                <Link className="nav-link" to="contact">Contacts</Link>
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}