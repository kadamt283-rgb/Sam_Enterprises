import React, { useState } from 'react';
import {
    FaSearch, FaIdCard, FaBriefcase, FaShieldAlt,
    FaScroll, FaFileInvoice, FaFileAlt, FaGlobe, FaCaretDown
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Services.css';

const servicesData = [
    {
        category: "ओळखपत्रे आणि परवाने (ID & Licenses)",
        icon: <FaIdCard />,
        services: [
            {
                title: "पॅन कार्ड (PAN Card)",
                desc: "नवीन पॅनकार्ड आणि दुरुस्ती सेवा, कंपनी/HUF/NRI पॅनकार्ड.",
                docs: [
                    "नवीन – आधारकार्ड, 2 फोटो",
                    "दुरुस्ती – आधारकार्ड, 2 फोटो, मॅरेज सर्टिफिकेट / गॅझेट",
                    "कंपनी / HUF / NRI – पासपोर्ट, रजिस्ट्रेशन सर्टिफिकेट, आधारकार्ड / वस्ती दाखला"
                ]
            },
            {
                title: "पासपोर्ट (Passport)",
                desc: "नवीन पासपोर्ट आणि नूतनीकरण (नवीनीकरण) सेवा.",
                docs: [
                    "स्वतःचा शाळा सोडल्याचा दाखला",
                    "जन्म दाखला",
                    "पासपोर्ट फोटो",
                    "लाईट बिल / भाडेकरार",
                    "आधार कार्ड / पॅनकार्ड"
                ]
            },
            {
                title: "डोमिसाइल / रहिवासी (Domicile)",
                desc: "रहिवासी प्रमाणपत्र आणि डोमिसाईल दाखला.",
                docs: [
                    "मुलाचा व वडिलांचा शाळा सोडल्याचा दाखला",
                    "लाईट बिल / घरमालक संमतीपत्र",
                    "रेशन कार्ड",
                    "इंडेक्स 2 किंवा CPL",
                    "आधारकार्ड व फोटो"
                ]
            },
            {
                title: "रेशन कार्ड (Ration Card)",
                desc: "नवीन रेशन कार्ड, नावे कमी करणे वा वाढवणे.",
                docs: [
                    "पूर्ण कुटुंबाचा आधारकार्ड",
                    "पासपोर्ट फोटो",
                    "बँक पासबुक",
                    "अर्ज"
                ]
            },
            {
                title: "हयातीचा दाखला (Life Certificate)",
                desc: "पेन्शनधारकांसाठी जीवन प्रमाणपत्र (Life Certificate).",
                docs: [
                    "पेन्शनर कार्ड",
                    "आधार कार्ड",
                    "बँक पासबुक"
                ]
            }
        ]
    },
    {
        category: "शासकीय दाखले (Govt. Certificates)",
        icon: <FaScroll />,
        services: [
            {
                title: "जातिचा दाखला (Caste Certificate)",
                desc: "शासकीय जातीचा दाखला मिळवून देणे.",
                docs: [
                    "स्वतःचा शाळा सोडल्याचा दाखला / बोनाफाईड",
                    "वडिलांचा शाळा सोडल्याचा दाखला व जातिचा दाखला",
                    "रेशन कार्ड / लाईट बिल / घर भाडेकरार",
                    "आधार कार्ड / मतदान कार्ड / पॅन कार्ड",
                    "घरमालक संमती पत्र व लाईट बिल"
                ]
            },
            {
                title: "नॉन क्रिमिलेअर (Non-Creamy Layer)",
                desc: "नॉन क्रिमिलेअर प्रमाणपत्र.",
                docs: [
                    "मुलाचा व वडिलांचा शाळा सोडल्याचा दाखला",
                    "जातिचा दाखला",
                    "लाईट बिल / घरमालक संमतीपत्र",
                    "रेशन कार्ड, आधारकार्ड, फोटो",
                    "तहसीलदार व उत्पन्न दाखला / वडिलांचा ITR"
                ]
            },
            {
                title: "उत्पन्न दाखला (Income Cert.)",
                desc: "तहसीलदार इनकम सर्टिफिकेट (वार्षिक उत्पन्न).",
                docs: [
                    "रेशनकार्ड, आधारकार्ड (संपूर्ण कुटुंब)",
                    "2 फोटो",
                    "तलाठी दाखला / जमीन 7/12 / ITR",
                    "नोकरी असेल तर वेतन प्रमाणपत्र"
                ]
            },
            {
                title: "EWS सर्टिफिकेट (EWS Cert.)",
                desc: "आर्थिक दृष्ट्या दुर्बल घटकांचे प्रमाणपत्र.",
                docs: [
                    "स्वतःचा शाळा सोडल्याचा दाखला",
                    "वडिलांचा शाळा सोडल्याचा दाखला",
                    "रेशन कार्ड / लाईट बिल",
                    "आधार कार्ड / मतदान कार्ड / पॅन कार्ड",
                    "प्रतिज्ञापत्र"
                ]
            },
            {
                title: "30% महिला आरक्षण",
                desc: "महिलांसाठी ३० टक्के नोकरी आरक्षण प्रमाणपत्र.",
                docs: [
                    "मुलीचा शाळा सोडल्याचा दाखला",
                    "वडिलांचा शाळा सोडल्याचा दाखला",
                    "3 वर्षाचा रहिवासी दाखला",
                    "रेशन कार्ड / लाईट बिल / कर पावती",
                    "आधार कार्ड / मतदान कार्ड / पॅन कार्ड"
                ]
            }
        ]
    },
    {
        category: "व्यवसाय आणि कर (Business & Tax)",
        icon: <FaBriefcase />,
        services: [
            {
                title: "शॉप अॅक्ट (Shop Act)",
                desc: "नवीन व्यवसाय सुरू करण्यासाठी गुमास्ता परवाना.",
                docs: [
                    "व्यवसायाचे नाव",
                    "आधारकार्ड / पॅनकार्ड",
                    "लाईट बिल / टॅक्स पावती"
                ]
            },
            {
                title: "उद्यम आधार (Udyam Aadhar)",
                desc: "MSME उद्योग आधार नोंदणी.",
                docs: [
                    "व्यवसायाचे नाव",
                    "आधारकार्ड",
                    "पॅनकार्ड / बँक पासबुक",
                    "मोबाईल नंबर"
                ]
            },
            {
                title: "GST रजिस्ट्रेशन (GST Reg.)",
                desc: "नवीन वस्तू आणि सेवा कर (GST) क्रमांक.",
                docs: [
                    "आधारकार्ड / पॅनकार्ड",
                    "जागेचे बिल",
                    "रेंट अॅग्रीमेंट"
                ]
            }
        ]
    },
    {
        category: "नोंदणी आणि कायदेशीर (Legal & Civil)",
        icon: <FaShieldAlt />,
        services: [
            {
                title: "गॅझेट / राजपत्र (Gazette)",
                desc: "नाव, स्पेलिंग किंवा जन्मतारीख बदलण्याबाबत शासन राजपत्र.",
                docs: [
                    "आधारकार्ड / पॅनकार्ड",
                    "रेशनकार्ड / लाईट बिल",
                    "लग्नानंतर नाव बदल",
                    "घटस्फोट / मुलीचा घटस्फोट",
                    "1 कलर फोटो"
                ]
            },
            {
                title: "मॅरेज सर्टिफिकेट (Marriage Cert.)",
                desc: "विवाह शासकीय नोंदणी व प्रमाणपत्र.",
                docs: [
                    "नवरा-बायको प्राथमिक ओळखपत्र",
                    "लाईट बिल / अॅड्रेस",
                    "पासपोर्ट साईज फोटो",
                    "लग्नाचा फोटो 3",
                    "साक्षीदार 3 (आधारकार्ड व फोटो)"
                ]
            },
            {
                title: "नोटरी (Notary & Affidavit)",
                desc: "प्रतिज्ञापत्र (Affidavit) आणि स्टॅम्प पेपर नोटरी.",
                docs: [
                    "स्टॅम्प पेपर",
                    "आधार कार्ड",
                    "फोटो",
                    "माहिती (ड्राफ्ट)"
                ]
            },
            {
                title: "पोलिस व्हेरिफिकेशन (PCC)",
                desc: "पोलिस क्लिअरन्स सर्टिफिकेट आणि चारित्र्य पडताळणी.",
                docs: [
                    "आधार कार्ड / जन्म दाखला",
                    "आधारकार्ड / रेशनकार्ड",
                    "2 पासपोर्ट फोटो",
                    "रहिवासी पुरावा",
                    "कंपनी लेटरहेड"
                ]
            }
        ]
    }
];

const Services = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedService, setExpandedService] = useState(null);

    const toggleDocs = (idx) => {
        setExpandedService(expandedService === idx ? null : idx);
    };

    const filteredServices = servicesData.map(cat => ({
        ...cat,
        services: cat.services.filter(s =>
            s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cat.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(cat => cat.services.length > 0);

    return (
        <div className="services-page">
            <Helmet>
                <title>Premium Services | Sam Enterprises Pune - All Gov Services</title>
                <meta name="description" content="Premium government services including PAN Card, Passport, Domicile, Non-Creamy Layer, GST & more in Pune." />
            </Helmet>

            {/* Premium Corporate Hero Section */}
            <section className="services-hero-premium">
                <div className="hero-overlay"></div>
                <div className="container relative-z">
                    <span className="hero-badge">Expert Consultancy</span>
                    <h1 className="hero-title-premium">All <span className="highlight-text">Services</span></h1>
                    <p className="hero-subtitle-premium">
                        आमच्या सर्व शासकीय आणि कायदेशीर सेवा (All Government & Legal Services).<br />
                        सर्वाधिक विश्वासार्ह आणि जलद सेवा (Most Reliable & Fastest Service Delivery).
                    </p>
                    <div className="search-bar-elite">
                        <FaSearch className="search-icon-elite" />
                        <input
                            type="text"
                            placeholder="कोणती सेवा हवी आहे ते शोधा... (Search for a service)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <div className="container services-main-container">
                {filteredServices.length === 0 ? (
                    <div className="no-results-found">
                        <p>No services found matching your search. Please try another keyword.</p>
                    </div>
                ) : (
                    filteredServices.map((section, idx) => (
                        <div className="elite-category-section" key={idx}>
                            <div className="elite-category-header">
                                <div className="elite-icon-wrapper">{section.icon}</div>
                                <h2>{section.category}</h2>
                            </div>

                            <div className="elite-services-grid">
                                {section.services.map((service, sIdx) => {
                                    const serviceId = `${idx}-${sIdx}`;
                                    const isExpanded = expandedService === serviceId;

                                    return (
                                        <div className={`elite-service-card ${isExpanded ? 'card-expanded' : ''}`} key={sIdx}>
                                            <div className="elite-card-content">
                                                <div className="elite-card-indicator"></div>
                                                <div className="elite-card-details">
                                                    <h3 className="elite-card-title">{service.title}</h3>
                                                    <p className="elite-card-desc">{service.desc}</p>
                                                    <button
                                                        className={`elite-action-btn ${isExpanded ? 'btn-active' : ''}`}
                                                        onClick={() => toggleDocs(serviceId)}
                                                    >
                                                        {isExpanded ? 'Hide Documents' : 'View Documents'}
                                                        <FaCaretDown className={`btn-caret ${isExpanded ? 'caret-up' : ''}`} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Expandable Document List */}
                                            <div className="elite-docs-container" style={{ maxHeight: isExpanded ? '500px' : '0' }}>
                                                <div className="elite-docs-inner">
                                                    <h4 className="docs-heading">Required Documents:</h4>
                                                    <ul className="docs-list-premium">
                                                        {service.docs.map((doc, dIdx) => (
                                                            <li key={dIdx}>
                                                                <span className="check-circle"></span>
                                                                {doc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Call to action */}
            <section className="services-cta-premium">
                <div className="container">
                    <h2>Need Help Choosing a Service?</h2>
                    <p>Our expert consultants are ready to assist you bridging the gap between complexity and ease.</p>
                    <a href="/contact" className="premium-btn-primary">Contact Us Now</a>
                </div>
            </section>
        </div>
    );
};

export default Services;
