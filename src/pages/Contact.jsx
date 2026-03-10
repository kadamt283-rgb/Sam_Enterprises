import React from 'react';
import { FaEnvelope as Mail, FaPhone as Phone, FaMapMarkerAlt as MapPin, FaClock } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Helmet>
                <title>संपर्क करा | Sam Enterprises Pune - हडपसर, पुणे</title>
                <meta name="description" content="Sam Enterprises Pune ला आजच संपर्क करा. पत्ता: हडपसर पुणे. फोन: +91 9607405060. आम्ही सर्व शासकीय कामांसाठी उपलब्ध आहोत." />
            </Helmet>

            <section className="page-hero">
                <div className="container">
                    <h1><span className="hero-sam">संपर्क करा</span></h1>
                    <p className="page-hero-sub">Contact Us | आम्हाला कधीही संपर्क करा — आम्ही तुमच्यासाठी नेहमी उपलब्ध आहोत.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-layout">


                    <div className="contact-info-col">
                        <h2 className="contact-heading">थेट संपर्क करा (Reach Us)</h2>

                        <div className="bento-item contact-bento">
                            <div className="contact-icon-row">
                                <div className="contact-icon-box"><Phone /></div>
                                <div><h3>फोन (Phone)</h3><p>+91 9607 40 5060</p><p>+91 9021 42 7173</p></div>
                            </div>
                        </div>

                        <div className="bento-item contact-bento">
                            <div className="contact-icon-row">
                                <div className="contact-icon-box"><Mail /></div>
                                <div><h3>ईमेल (Email)</h3><p>samenterprisepune@gmail.com</p></div>
                            </div>
                        </div>

                        <div className="bento-item contact-bento">
                            <div className="contact-icon-row">
                                <div className="contact-icon-box"><MapPin /></div>
                                <div><h3>पत्ता (Address)</h3><p>Shop No 05 Archana Apartment, Behind Manohar Cloth Center,</p><p>Hadapsar, Pune – 411028</p></div>
                            </div>
                        </div>

                        <div className="bento-item contact-bento">
                            <div className="contact-icon-row">
                                <div className="contact-icon-box"><FaClock /></div>
                                <div><h3>वेळ (Timings)</h3><p>सोमवार - शनिवार</p><p>सकाळी 10:00 AM – संध्याकाळी 06:00 PM</p></div>
                            </div>
                        </div>

                        <div className="map-embed">
                            <iframe
                                title="Sam Enterprises Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2!2d73.8800!3d18.4700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzEyLjAiTiA3M8KwNTInNDguMCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                                width="100%" height="220" style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    <div className="contact-form-col">
                        <h2 className="contact-heading">संदेश पाठवा (Send Message)</h2>
                        <form className="premium-form" action="https://formsubmit.co/samenterprisepune@gmail.com" method="POST">
                            <input type="hidden" name="_subject" value="नवीन चौकशी: Sam Enterprises Website" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="form-group">
                                <label htmlFor="name">पूर्ण नाव (Full Name)</label>
                                <input type="text" id="name" name="Customer_Name" placeholder="तुमचे नाव..." required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">ईमेल (Email ID)</label>
                                <input type="email" id="email" name="Customer_Email" placeholder="tumcha@email.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">फोन नंबर (Phone)</label>
                                <input type="tel" id="phone" name="Customer_Phone" placeholder="+91 XXXXX XXXXX" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">सेवेचा प्रकार (Service Type)</label>
                                <select id="service" name="Service_Requested" required>
                                    <option value="">-- सेवा निवडा (Select Service) --</option>
                                    <option value="Registered Rent Agreement">Registered Rent Agreement</option>
                                    <option value="PAN Card">PAN Card</option>
                                    <option value="Aadhaar Update">Aadhaar Update</option>
                                    <option value="Income Certificate">Income Certificate</option>
                                    <option value="Marriage Certificate">Marriage Certificate</option>
                                    <option value="Gazette Services">Gazette Services</option>
                                    <option value="Other">इतर (Other)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">संदेश (Message)</label>
                                <textarea id="message" name="Client_Message" rows="5" placeholder="तुमचा प्रश्न किंवा संदेश लिहा..." required></textarea>
                            </div>
                            <button type="submit" className="btn-premium btn-primary-grad" style={{ width: '100%', justifyContent: 'center' }}>
                                संदेश पाठवा (Send Message)
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
