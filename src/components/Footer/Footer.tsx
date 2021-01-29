import React from "react";
// styles
import "./styles.css";
// images
import logo from "./logo-rs.png"

const Footer = () => {
    return (
        <footer className="footer">
            <a className="logo" href="https://rs.school/js/" target="_blank"  rel="noreferrer">
                <img className="logo__image" src={logo} alt="RSSchool" width="100" />
            </a>
            <div className="developers">
                <a href="https://github.com/SkyWalker1996x" target="_blank" rel="noreferrer">@SkyWalker1996x</a>
                <a href="https://github.com/macintosha339" target="_blank" rel="noreferrer">@macintosha339</a>
                <a href="https://github.com/Riba0017" target="_blank" rel="noreferrer">@Riba0017</a>
            </div>
            <div className="info">
                <span className="info__year">2021</span>
            </div>
        </footer>
    );
};

export default Footer;