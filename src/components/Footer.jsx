import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/images/logo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section brand">
                    <Link to="/" className="footer-logo-container">
                        <div className="premium-logo footer-logo-scale">
                            <svg width="180" height="50" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Feathered Swirl - White and Saffron shades */}
                                <path d="M15 45C10 40 8 30 12 25C15 20 22 18 28 22" stroke="#FF9933" strokeWidth="4" strokeLinecap="round" />
                                <path d="M18 48C12 43 10 32 14 27C17 22 24 20 30 24" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                                <path d="M22 51C16 46 14 35 18 30C21 25 28 23 34 27" stroke="#FF9933" strokeWidth="4" strokeLinecap="round" />
                                <path d="M26 54C20 49 18 38 22 33C25 28 32 26 38 30" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

                                {/* Stylized SAM - White/Saffron/White */}
                                <text x="50" y="42" fill="#FFFFFF" style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'Arial Black', letterSpacing: '-1px' }}>S</text>
                                <text x="80" y="42" fill="#FF9933" style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'Arial Black', letterSpacing: '-1px' }}>A</text>
                                <text x="110" y="42" fill="#FFFFFF" style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'Arial Black', letterSpacing: '-1px' }}>M</text>

                                {/* ENTERPRISES with double lines */}
                                <line x1="52" y1="48" x2="72" y2="48" stroke="#FF9933" strokeWidth="1.5" />
                                <line x1="52" y1="52" x2="72" y2="52" stroke="#FF9933" strokeWidth="1.5" />
                                <text x="76" y="53" fill="#FFFFFF" style={{ fontSize: '9px', fontWeight: '800', letterSpacing: '1.5px', fontFamily: 'Arial' }}>ENTERPRISES</text>

                                {/* Emblem Section */}
                                <circle cx="180" cy="30" r="24" stroke="#FF9933" strokeWidth="2.5" />
                                <rect x="178" y="16" width="4" height="28" rx="1" fill="#FFFFFF" />
                                <rect x="170" y="18" width="20" height="2" rx="0.5" fill="#FFFFFF" />
                                <path d="M168 22L162 34H174L168 22Z" fill="none" stroke="#FF9933" strokeWidth="1.5" />
                                <path d="M192 22L186 34H198L192 22Z" fill="none" stroke="#FF9933" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </Link>
                    <p>
                        नोंदणीकृत रेंट ॲग्रीमेंट आणि सर्व प्रकारचे सरकारी दाखले मिळण्याचे विश्वसनीय ठिकाण. आत्ताच भेट द्या किंवा संपर्क करा.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h3>महत्वाच्या लिंक्स</h3>
                    <ul>
                        <li><Link to="/">मुख्यपृष्ठ (Home)</Link></li>
                        <li><Link to="/about">आमच्याबद्दल (About)</Link></li>
                        <li><Link to="/services">आमच्या सेवा (Services)</Link></li>
                        <li><Link to="/contact">संपर्क (Contact)</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>संपर्क साधा</h3>
                    <ul>
                        <li>
                            <FaMapMarkerAlt size={18} />
                            <span>Shop No. 01, Behind Manohar Cloth Center, Hadapsar, Pune - CSC केंद्र</span>
                        </li>
                        <li>
                            <FaPhone size={18} />
                            <span>+91 9607 40 5060 / 9021 42 7173</span>
                        </li>
                        <li>
                            <FaEnvelope size={18} />
                            <span>samenterprisepune@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Sam Enterprises. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
