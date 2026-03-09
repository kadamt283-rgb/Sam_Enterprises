import React from 'react';
import { FaBullseye as Target, FaShieldAlt, FaBolt, FaSmile, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="container">
                    <h1><span className="hero-sam">आमच्याबद्दल</span></h1>
                    <p className="page-hero-sub">Sam Enterprises | पुण्यातील विश्वासार्ह महा ई-सेवा केंद्र (About Us)</p>
                </div>
            </section>

            <section className="section about-intro">
                <div className="container about-grid">
                    <div className="about-text-block">
                        <div className="section-pill">आमची वाटचाल (Our Journey)</div>
                        <h2>१० वर्षांपेक्षा जास्त विश्वासाची परंपरा</h2>
                        <p>
                            सॅम एंटरप्रायझेस (Sam Enterprises) हे गेल्या अनेक वर्षांपासून ग्राहकांना जलद आणि विश्वासार्ह शासकीय सेवा पुरवण्यात अग्रेसर आहे.
                            आम्ही सर्व प्रकारचे सरकारी दाखले, रेंट ॲग्रीमेंट आणि इतर महत्वाची कागदपत्रे एकाच छताखाली उपलब्ध करून देतो.
                        </p>
                        <p className="en-para">
                            Sam Enterprises has been a leading provider of fast and reliable government services for over a decade. We provide all types of government certificates, rent agreements, and essential documentation under one roof.
                        </p>
                        <div className="about-contact-quick">
                            <div className="about-quick-item"><FaPhone /> +91 9607 40 5060</div>
                            <div className="about-quick-item"><FaEnvelope /> samenterprisepune@gmail.com</div>
                            <div className="about-quick-item"><FaMapMarkerAlt /> Shop No. 01, Hadapsar, Pune</div>
                        </div>
                    </div>
                    <div className="about-stats-grid">
                        <div className="about-stat-card">
                            <span className="stat-big">10+</span>
                            <span className="stat-lbl">वर्षांचा अनुभव</span>
                        </div>
                        <div className="about-stat-card">
                            <span className="stat-big">50k+</span>
                            <span className="stat-lbl">सुखी ग्राहक</span>
                        </div>
                        <div className="about-stat-card">
                            <span className="stat-big">100%</span>
                            <span className="stat-lbl">पारदर्शकता</span>
                        </div>
                        <div className="about-stat-card">
                            <span className="stat-big">30+</span>
                            <span className="stat-lbl">सेवा</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section values-section" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-pill">Core Values</div>
                        <h2>आमची मुख्य उद्दिष्टे</h2>
                    </div>
                    <div className="bento-grid">
                        <div className="bento-item">
                            <Target size={36} style={{ marginBottom: '15px', color: 'var(--saffron)' }} />
                            <h3 className="bento-title">निष्ठा (Reliability)</h3>
                            <p className="bento-desc">शासकीय कामांत अचूकता आणि विश्वासार्हता हीच आमची ओळख आहे.</p>
                        </div>
                        <div className="bento-item">
                            <FaBolt size={36} style={{ marginBottom: '15px', color: 'var(--saffron)' }} />
                            <h3 className="bento-title">वेग (Speed)</h3>
                            <p className="bento-desc">तुमचा वेळ मौल्यवान आहे, म्हणून आम्ही जलद सेवा देण्यास कटिबद्ध आहोत.</p>
                        </div>
                        <div className="bento-item">
                            <FaSmile size={36} style={{ marginBottom: '15px', color: 'var(--saffron)' }} />
                            <h3 className="bento-title">ग्राहक समाधान</h3>
                            <p className="bento-desc">ग्राहकांचे समाधान हेच आमचे खरे यश आहे.</p>
                        </div>
                        <div className="bento-item">
                            <FaShieldAlt size={36} style={{ marginBottom: '15px', color: 'var(--saffron)' }} />
                            <h3 className="bento-title">सुरक्षा (Security)</h3>
                            <p className="bento-desc">तुमच्या कागदपत्रांची गोपनियता आणि सुरक्षा राखणे आमचे कर्तव्य आहे.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
