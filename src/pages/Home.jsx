import React from 'react';
import { FaArrowRight as ArrowRight, FaCheckCircle as CheckCircle, FaPhone as Phone, FaEnvelope as Mail, FaFileAlt as FileText, FaCreditCard as CreditCard, FaGlobe as Globe, FaScroll as Scroll, FaShieldAlt, FaBolt, FaSmile, FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-premium">
                <div className="container hero-content-grid">
                    <div className="hero-text-premium">
                        <h1><span className="hero-sam">SAM</span> <span className="hero-ent">ENTERPRISES</span></h1>
                        <p className="hero-subtitle">
                            तुमच्या सर्व शासकीय कागदपत्रांसाठी आणि ऑनलाईन सेवांसाठी पुण्याचे सर्वात विश्वसनीय केंद्र.
                            (Pune's most trusted center for all government documentation and online services.)
                        </p>
                        <div className="hero-cta-group">
                            <Link to="/services" className="btn-premium btn-primary-grad">
                                आमच्या सेवा <ArrowRight />
                            </Link>
                            <Link to="/about" className="btn-premium btn-outline-white">
                                अधिक माहिती
                            </Link>
                        </div>
                    </div>

                    <div className="hero-glass-card">
                        <div className="quick-contact-box">
                            <h3>त्वरीत संपर्क (Quick Contact)</h3>
                            <div className="contact-item-hero">
                                <div className="icon-circle-hero"><Phone /></div>
                                <div>
                                    <p>फोन करा (Call Us)</p>
                                    <strong>+91 9607 40 5060</strong>
                                </div>
                            </div>
                            <div className="contact-item-hero">
                                <div className="icon-circle-hero"><Mail /></div>
                                <div>
                                    <p>ईमेल (Email Id)</p>
                                    <strong>samenterprisepune@gmail.com</strong>
                                </div>
                            </div>
                            <div className="contact-item-hero">
                                <div className="icon-circle-hero"><Globe /></div>
                                <div>
                                    <p>पत्ता (Location)</p>
                                    <strong>Shop No. 01, Behind Manohar Cloth Center, Hadapsar, Pune</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Bento Services Grid --- */}
            <section className="bento-section">
                <div className="container">
                    <div className="section-header-centered">
                        <h2>आमच्या प्रमुख सेवा (Key Services)</h2>
                        <p>आम्ही पुरवतो उच्च दर्जाच्या तांत्रिक आणि शासकीय सेवा</p>
                    </div>

                    <div className="bento-grid">
                        <div className="bento-item">
                            <h3 className="bento-title">नोंदणीकृत रेंट ॲग्रीमेंट</h3>
                            <p className="bento-subtitle">(Registered Rent Agreement)</p>
                            <p className="bento-desc">मॅरेज सर्टिफिकेट, नोटरी आणि रजिस्ट्रार कामांसाठी विश्वसनीय केंद्र.</p>
                            <Link to="/services" className="btn-premium btn-primary-grad" style={{ marginTop: 'auto' }}>Explore More</Link>
                            <Scroll className="bento-icon-bg" />
                        </div>

                        <div className="bento-item">
                            <h3 className="bento-title">पॅन/आधार सेवा</h3>
                            <p className="bento-subtitle">(PAN & Aadhaar Services)</p>
                            <p className="bento-desc">नवीन पॅनकार्ड, आधार अपडेट आणि लिंकिंग सेवा जलद वेळेत.</p>
                            <Link to="/services" className="btn-premium btn-primary-grad" style={{ marginTop: 'auto' }}>Explore More</Link>
                            <CreditCard className="bento-icon-bg" />
                        </div>

                        <div className="bento-item">
                            <h3 className="bento-title">गॅझेट सेवा</h3>
                            <p className="bento-subtitle">(Gazette Services)</p>
                            <p className="bento-desc">नाव बदलणे, धर्म बदलणे किंवा जन्मतारीख दुरुस्तीसाठी सल्ला.</p>
                            <Link to="/services" className="btn-premium btn-primary-grad" style={{ marginTop: 'auto' }}>Explore More</Link>
                            <FileText className="bento-icon-bg" />
                        </div>

                        <div className="bento-item">
                            <h3 className="bento-title">शासकीय दाखले</h3>
                            <p className="bento-subtitle">(Govt. Certificates)</p>
                            <p className="bento-desc">उत्पन्न दाखला, डोमिसाईल, नॉन-क्रिमिलेयर आणि बरेच काही.</p>
                            <Link to="/services" className="btn-premium btn-primary-grad" style={{ marginTop: 'auto' }}>Explore More</Link>
                            <FaUniversity className="bento-icon-bg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Why Us Section --- */}
            <section className="why-us-section">
                <div className="container">
                    <div className="why-us-grid">
                        <div className="why-us-card">
                            <div className="why-icon-l"><FaShieldAlt /></div>
                            <h3>पूर्ण सुरक्षितता</h3>
                            <p>तुमची कागदपत्रे कडक गोपनीयतेसह हाताळली जातात.</p>
                        </div>
                        <div className="why-us-card">
                            <div className="why-icon-l"><FaBolt /></div>
                            <h3>जलद प्रक्रिया</h3>
                            <p>आम्ही वेळ वाचवण्यासाठी प्रगत तंत्रज्ञानाचा वापर करतो.</p>
                        </div>
                        <div className="why-us-card">
                            <div className="why-icon-l"><FaSmile /></div>
                            <h3>ग्राहक समाधान</h3>
                            <p>५०००+ पेक्षा जास्त सुखी ग्राहकांचा आम्हाला अभिमान आहे.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="stats-premium-bar">
                <div className="container stats-grid-p">
                    <div className="stat-p-item">
                        <span className="stat-p-num">10+</span>
                        <span className="stat-p-label">वर्षांचा अनुभव</span>
                    </div>
                    <div className="stat-p-item">
                        <span className="stat-p-num">50k+</span>
                        <span className="stat-p-label">सुखी ग्राहक</span>
                    </div>
                    <div className="stat-p-item">
                        <span className="stat-p-num">100%</span>
                        <span className="stat-p-label">यश दर</span>
                    </div>
                    <div className="stat-p-item">
                        <span className="stat-p-num">24/7</span>
                        <span className="stat-p-label">सल्लागार</span>
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="section cta">
                <div className="container">
                    <h2>आजच तुमच्या शासकीय कामांना सुरुवात करा</h2>
                    <p>Contact Sam Enterprises for reliable and fast official services in Pune.</p>
                    <Link to="/contact" className="btn-premium btn-primary-grad" style={{ marginTop: '30px' }}>
                        आता संपर्क करा
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
