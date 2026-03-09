import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaLandmark } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/images/logo.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="header">

            <div className="container header-content">
                <Link to="/" className="logo-container">
                    <div className="premium-logo">
                        <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 45C10 40 8 30 12 25C15 20 22 18 28 22" stroke="#A67C52" strokeWidth="4" strokeLinecap="round" />
                            <path d="M18 48C12 43 10 32 14 27C17 22 24 20 30 24" stroke="#D32F2F" strokeWidth="4" strokeLinecap="round" />
                            <path d="M22 51C16 46 14 35 18 30C21 25 28 23 34 27" stroke="#A67C52" strokeWidth="4" strokeLinecap="round" />
                            <path d="M26 54C20 49 18 38 22 33C25 28 32 26 38 30" stroke="#D32F2F" strokeWidth="4" strokeLinecap="round" />

                            <text x="50" y="42" fill="#D32F2F" style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'Arial Black', letterSpacing: '-1px' }}>S</text>
                            <text x="80" y="42" fill="#A67C52" style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'Arial Black', letterSpacing: '-1px' }}>A</text>
                            <text x="110" y="42" fill="#D32F2F" style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'Arial Black', letterSpacing: '-1px' }}>M</text>

                            <line x1="52" y1="48" x2="72" y2="48" stroke="#A67C52" strokeWidth="1.5" />
                            <line x1="52" y1="52" x2="72" y2="52" stroke="#A67C52" strokeWidth="1.5" />
                            <text x="76" y="53" fill="#D32F2F" style={{ fontSize: '9px', fontWeight: '800', letterSpacing: '1.5px', fontFamily: 'Arial' }}>ENTERPRISES</text>

                            <circle cx="180" cy="30" r="24" stroke="#A67C52" strokeWidth="2.5" />
                            <circle cx="180" cy="30" r="20" stroke="#A67C52" strokeWidth="1" />
                            <rect x="178" y="16" width="4" height="28" rx="1" fill="#D32F2F" />
                            <rect x="170" y="18" width="20" height="2" rx="0.5" fill="#D32F2F" />
                            <rect x="174" y="42" width="12" height="2" rx="0.5" fill="#D32F2F" />
                            <path d="M168 22L162 34H174L168 22Z" fill="none" stroke="#A67C52" strokeWidth="1.5" />
                            <path d="M192 22L186 34H198L192 22Z" fill="none" stroke="#A67C52" strokeWidth="1.5" />
                        </svg>
                    </div>
                </Link>
                <nav className={`nav ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="header-contact-right">
                    <a href="tel:+919607405060" className="contact-item">
                        <FaPhone className="contact-icon" />
                        <span>+91 9607 40 5060</span>
                        <span> / +91 7057 51 9694</span>
                    </a>
                    <a href="mailto:samenterprisepune@gmail.com" className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <span>samenterprisepune@gmail.com</span>
                    </a>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
