import React, { useState } from 'react';
import {
    FaFileAlt, FaCreditCard, FaGlobe, FaScroll, FaPenNib,
    FaUsers, FaHeart, FaShieldAlt, FaLeaf, FaUniversity,
    FaGraduationCap, FaTools, FaFileInvoice, FaLandmark,
    FaSearch
} from 'react-icons/fa';
import './Services.css';

const servicesData = [
    {
        category: "G2C (शासकीय सेवा)",
        icon: <FaUniversity />,
        services: [
            {
                title: "आधार कार्ड (Aadhar Card)",
                desc: "नवीन नोंदणी, दुरुस्ती आणि कलर प्रिंट (New, Update, Print).",
                docs: ["ओळख पुरावा (ID Proof)", "पत्ता पुरावा (Address Proof)", "जन्म दाखला (Birth Cert - for new)"]
            },
            {
                title: "पॅन कार्ड (PAN Card)",
                desc: "नवीन पॅन कार्ड, दुरुस्ती आणि रिप्रिंट (New, Correction, Reprint).",
                docs: ["आधार कार्ड (Aadhar Card)", "फोटो (Photo)", "जुना पॅन (Old PAN - if correction)"]
            },
            {
                title: "मतदान कार्ड (Voter ID)",
                desc: "नवीन नाव नोंदणी आणि दुरुस्ती (New registration and correction).",
                docs: ["आधार कार्ड", "वयाचा पुरावा (Age Proof)", "लाईट बिल (Electricity Bill)"]
            },
            {
                title: "उत्पन्न दाखला (Income Certificate)",
                desc: "१ वर्ष व ३ वर्षांचे तहसीलचे दाखले (1 & 3 year certificates).",
                docs: ["रेशन कार्ड", "तलाठी अहवाल (Talathi Report)", "स्वयंघोषणापत्र (Self Declaration)"]
            },
            {
                title: "जातीचा दाखला (Caste Certificate)",
                desc: "सर्व जातींचे शासकीय दाखले (All castes official certificates).",
                docs: ["रक्त नात्याचा पुरावा (Blood Relation Proof)", "शाळा सोडल्याचा दाखला (LC)", "१९५०/१९६७ चा पुरावा"]
            },
            {
                title: "रहिवासी / राष्ट्रीयत्व (Domicile/Nationality)",
                desc: "डोमिसाईल आणि राष्ट्रीयत्व दाखला (Residence and Nationality).",
                docs: ["आधार कार्ड", "रेशन कार्ड", "१० वर्षांचा रहिवासी पुरावा (10 yr Resident Proof)"]
            },
            {
                title: "रेशन कार्ड (Ration Card)",
                desc: "नाव वाढवणे, कमी करणे आणि दुरुस्ती (Add/Delete name/Correction).",
                docs: ["जुने रेशन कार्ड", "आधार कार्ड (सर्वांचे)", "रहिवासी पुरावा"]
            }
        ]
    },
    {
        category: "Agriculture (कृषी सेवा)",
        icon: <FaLeaf />,
        services: [
            {
                title: "७/१२ आणि ८ अ उतारा (7/12 & 8A)",
                desc: "डिजिटल स्वाक्षरित सर्व प्रकारचे उतारे (Digitally signed extracts).",
                docs: ["गट नंबर (Gat No)", "जिल्हा/तालुका/गाव नाव"]
            },
            {
                title: "मिळकत पत्रिका (Property Card)",
                desc: "शहरी मिळकत पत्रिका (Urban property card extracts).",
                docs: ["सी.टी.एस. नंबर (CTS No)", "मालकाचे नाव"]
            },
            {
                title: "पी.एम. किसान (PM-Kisan)",
                desc: "नोंदणी, KYC आणि स्टेटस चेक (Registration, KYC, Status).",
                docs: ["७/१२ उतारा", "आधार कार्ड", "बँक पासबुक (Bank Passbook)"]
            },
            {
                title: "पिक विमा (Crop Insurance)",
                desc: "सर्व हंगामांसाठी विमा सुविधा (Insurance for all seasons).",
                docs: ["७/१२ उतारा", "आधार कार्ड", "पेरणी पेरा (Sowing Cert)"]
            }
        ]
    },
    {
        category: "Legal & Identity (कायदेशीर सेवा)",
        icon: <FaShieldAlt />,
        services: [
            {
                title: "रजिस्टर रेंट ॲग्रीमेंट (Rent Agreement)",
                desc: "नोंदणीकृत रजिस्टर भाडेकरार सेवा (Online Registered Rent Agreement).",
                docs: ["मालक आधार/पॅन", "भाडेकरू आधार/पॅन", "२ साक्षीदार आधार (2 Witness Aadhar)"]
            },
            {
                title: "नोटरी व शपथपत्र (Notary/Affidavit)",
                desc: "सर्व प्रकारचे प्रतिज्ञापत्र आणि नोटरी (All types of affidavits).",
                docs: ["आधार कार्ड", "मसुदा (Draft Copy)", "फोटो"]
            },
            {
                title: "गॅझेट (Official Gazette)",
                desc: "नाव बदलणे, जन्मतारीख किंवा धर्म बदल गॅझेट (Name/DOB change).",
                docs: ["जुने नाव पुरावा", "नवीन नाव पुरावा", "शपथपत्र (Affidavit)"]
            },
            {
                title: "पासपोर्ट (Passport)",
                desc: "नवीन पासपोर्ट आणि नूतनीकरण (New application and renewal).",
                docs: ["आधार कार्ड (पत्ता पुरावा)", "शाळा सोडल्याचा दाखला (LC)", "बँक पासबुक"]
            },
            {
                title: "लग्न प्रमाणपत्र (Marriage Cert)",
                desc: "लग्नाची शासकीय नोंदणी (Official marriage registration).",
                docs: ["वर-वधू आधार", "शाळा सोडल्याचा दाखला", "लग्न पत्रिका (Invitation Card)", "३ साक्षीदार"]
            },
            {
                title: "शॉप ॲक्ट (Shop Act)",
                desc: "गुमास्ता परवाना (Shop and Establishment Licence).",
                docs: ["आधार कार्ड", "दुकानाचे नाव", "दुकानाचा फोटो (Board Photo)"]
            }
        ]
    },
    {
        category: "Financial & Utility (आर्थिक व बिल)",
        icon: <FaFileInvoice />,
        services: [
            {
                title: "वीज बिल भरणा (Electricity Bill)",
                desc: "MSEB व इतर सर्व कंपन्यांचे बिल (All company bill payments).",
                docs: ["ग्राहक क्रमांक (Consumer No)", "जुने बिल"]
            },
            {
                title: "आयकर परतावा (ITR Filing)",
                desc: "वैयक्तिक आणि व्यावसायिक ITR (Personal and Business ITR).",
                docs: ["Form 16/16A", "बँक स्टेटमेंट", "पॅन कार्ड"]
            },
            {
                title: "जीएसटी (GST Services)",
                desc: "नोंदणी आणि रिटर्न फाईलिंग (Registration and Returns).",
                docs: ["आधार/पॅन", "व्यावसायिक पत्ता पुरावा", "बँक कॅन्सल चेक"]
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
            <section className="page-hero">
                <div className="container">
                    <h1><span className="hero-sam">आमच्या सेवा</span></h1>
                    <p className="page-hero-sub">Our Services | ३०+ शासकीय सेवा एकाच ठिकाणी उपलब्ध (30+ Government Services)</p>
                    <div className="search-bar-premium">
                        <FaSearch className="search-icon-p" />
                        <input
                            type="text"
                            placeholder="सेवा शोधा... (Search services)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <div className="container">
                {filteredServices.map((section, idx) => (
                    <div className="service-category-section" key={idx}>
                        <div className="category-title">
                            <span className="cat-icon">{section.icon}</span>
                            <h2>{section.category}</h2>
                        </div>
                        <div className="services-grid-new">
                            {section.services.map((service, sIdx) => {
                                const serviceId = `${idx}-${sIdx}`;
                                const isExpanded = expandedService === serviceId;

                                return (
                                    <div className={`service-item-card ${isExpanded ? 'expanded' : ''}`} key={sIdx}>
                                        <div className="service-card-main">
                                            <div className="service-dot"></div>
                                            <div className="service-details">
                                                <h4>{service.title}</h4>
                                                <p>{service.desc}</p>
                                                <button
                                                    className="view-docs-btn"
                                                    onClick={() => toggleDocs(serviceId)}
                                                >
                                                    {isExpanded ? 'माहिती बंद करा (Hide Documents)' : 'कागदपत्रे पहा (View Documents)'}
                                                </button>
                                            </div>
                                        </div>
                                        {isExpanded && (
                                            <div className="docs-list-expanded">
                                                <h5>लागणारी कागदपत्रे (Required Documents):</h5>
                                                <ul>
                                                    {service.docs.map((doc, dIdx) => (
                                                        <li key={dIdx}>{doc}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
