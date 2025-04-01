import React from 'react';
import './headerFooterStyle.css'; 
import '../styles/globalStyles.css'; 
import { PiLineVerticalThin } from "react-icons/pi";

const Header: React.FC = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid col-10">
                    <img src="./src/assets/logo-gov.png" alt="" className="navbar-brand custom-logo"/>
                    
                    <PiLineVerticalThin className="custom-icon" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link px-1 rounded-4" aria-current="page" href="#">Home</a>
                            <a className="nav-link px-1 rounded-4" href="#">Sobre</a>
                            <a className="nav-link px-1 rounded-4" href="#">Centro-Oeste</a>
                            <a className="nav-link px-1 rounded-4" href="#">Norte</a>
                            <a className="nav-link px-1 rounded-4" href="#">Nordeste</a>
                        </div>
                    </div>
                </div>
            </nav>
    )
}; 

export default Header; 