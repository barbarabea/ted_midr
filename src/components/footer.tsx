import React from "react";
import './headerFooterStyle.css';
import { FaRegCopyright } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="pt-2 pb-5">
            <div className="container-fluid col-10 d-block">
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <p className=""> <FaRegCopyright /> Portadores dos direitos autorais, 2025.</p>

                    <img src="./src/assets/logo-gov.png" alt="" className="logo-footer"/>
                    <div className="d-flex flex-row">
                        <a className="nav-link px-2" aria-current="page" href="#">Home</a>
                        <a className="nav-link px-2" href="#">Sobre</a>
                        <a className="nav-link px-2" href="#">Centro-Oeste</a>
                        <a className="nav-link px-2" href="#">Norte</a>
                        <a className="nav-link px-2" href="#">Nordeste</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}; 

export default Footer; 