
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterTwo from './components/Footer';
import ContactSection from './components/ContactSection';
import TestimonialTwo from './pages/TestimonialTwo';
import Clients from './components/Clients';
import Industries from './pages/Industries';
import Expertise from './pages/Expertise';
import Enquiry from './components/Enquiry';
import Career from './components/Career';
import ServicesTwo from './pages/ServicesTwo';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutSection';
import Logisticcompanypune from './pages/Logistics Company Pune';
import ScrollToTop from './components/ScrollToTop';
import Bestlogisticcompanyinpune from './pages/Best Logistics Companies in Pune';
import Toplogisticcompanies from './pages/Top Logistics Companies in Pune';
import Logisticinpune from './pages/Logistics in Pune';
import Transportcompanyinpune from './pages/Transport Company in Pune';
import Logisticcompaniesinpune from './pages/Logistics Companies in Pune';
import Transportinpune from './pages/Transporters in Pune';
import Punetransportoffice from './pages/Pune Transport Office';
import Bestlogisticxompanyinpune from './pages/Best Logistics Company in Pune';
import Goodstransportserviceinpune from './pages/Goods Transport Services in Pune';
import Transportserviceforindustries from './pages/Transportation Services for Industrial';
import Punetransportserviceforcompany from './pages/Pune Transport Service for Company';
import Industrialtransportcompanyinpune from './pages/Industrial Transport Company in Pune';
import Supplychainmanagamentcompanyinpune from './pages/Supply Chain Management Company in Pune';
import Cargotransportationcompmany from './pages/Cargo Transportation Company in Pune';
import Commerciealtransportation from './pages/Commercial Transportation Services in Pune';
import Containertransporttaioncompany from './pages/Container Transportation Company in Pune';
import Thirdpartylogisticcompany from './pages/Third Party Logistics Company in India';
import Punetomumbautranspoert from './pages/Pune to Mumbai Transport Service';
import Punetobangloretransport from './pages/Pune to Bangalore Transport Service';
import Punetohyderabadtransport from './pages/Pune to Hyderabad Transport Service';
import Punetochennaitransportservice from './pages/Pune to Chennai Transport Service';
import Punetodelhitransport from './pages/Pune to Delhi Transport Service';
import PPunetoahmedtransportservice from './pages/Pune to Ahmedabad Transport Service';
import Punetosurattransport from './pages/Pune to Surat Transport Service';
import Punetonashiktransport from './pages/Pune to Nashik Transport Service';
import Punetonagpurtransport from './pages/Pune to Nagpur Transport Service';
import Punetokolhapurtransport from './pages/Pune to Kolhapur Transport Service';
import Punetogoatransportservice from './pages/Pune to Goa Transport Service';
import Punetoindoretransport from './pages/Pune to Indore Transport Service';
import Mumbaitopuetransportservice from './pages/Mumbai to Pune Transport Service';
import Bangloretopunetransport from './pages/Bangalore to Pune Transport Service';
import Hyderabadtopunetransport from './pages/Hyderabad to Pune Transport Service';
import Chennaitopune from './pages/Chennai to Pune Transport Service';
import Delhitopunetransport from './pages/Delhi to Pune Transport Service';
import Lgtransportservicevendor from './pages/LG Transport Services Vendor in Pune';
import Samsungtransportvendor from './pages/Samsung Transportation Vendor in Pune';
import Transportationservice from './pages/Transportation Service Company in PCMC';
import Werehousetransporttation from './pages/Warehouse Transportation Company in Pune';
import ContactButtons from './components/ContactButtons';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
<Header/>
      <ContactButtons />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactSection />} />
        <Route path="/testimonials" element={<TestimonialTwo />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/Industries-Served" element={<Industries />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<ServicesTwo />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Logistics-Company-Pune" element={<Logisticcompanypune />} />

<Route path="/Best-Logistics-Companies-in-Pune" element={<Bestlogisticcompanyinpune />} />
<Route path="/Top-Logistics-Companies-in-Pune" element={<Toplogisticcompanies />} />
<Route path="/Logistics-in-Pune" element={<Logisticinpune />} />
<Route path="/Transport-Company-in-Pune" element={<Transportcompanyinpune />} />
<Route path="/Logistics-Companies-in-Pune" element={<Logisticcompaniesinpune />} />
<Route path="/Transporters-in-Pune" element={<Transportinpune />} />
<Route path="/Pune-Transport-Office" element={<Punetransportoffice />} />
<Route path="/Best-Logistics-Company-in-Pune" element={<Bestlogisticxompanyinpune />} />
<Route path="/Goods-Transport-Services-in-Pune" element={<Goodstransportserviceinpune />} />
<Route path="/Transportation-Services-for-Industrial" element={<Transportserviceforindustries />} />
<Route path="/Pune-Transport-Service-for-Company" element={<Punetransportserviceforcompany />} />
<Route path="/Industrial-Transport-Company-in-Pune" element={<Industrialtransportcompanyinpune />} />
<Route path="/Supply-Chain-Management-Company-in-Pune" element={<Supplychainmanagamentcompanyinpune />} />
<Route path="/Cargo-Transportation-Company-in-Pune" element={<Cargotransportationcompmany />} />
<Route path="/Commercial-Transportation-Services-in-Pune" element={<Commerciealtransportation />} />
<Route path="/Container-Transportation-Company-in-Pune" element={<Containertransporttaioncompany />} />
<Route path="/Third-Party-Logistics-Company-in-India" element={<Thirdpartylogisticcompany />} />
<Route path="/Pune-to-Mumbai-Transport-Service" element={<Punetomumbautranspoert />} />
<Route path="/Pune-to-Bangalore-Transport-Service" element={<Punetobangloretransport />} />
<Route path="/Pune-to-Hyderabad-Transport-Service" element={<Punetohyderabadtransport />} />
<Route path="/Pune-to-Chennai-Transport-Service" element={<Punetochennaitransportservice />} />
<Route path="/Pune-to-Delhi-Transport-Service" element={<Punetodelhitransport />} />
<Route path="/Pune-to-Ahmedabad-Transport-Service" element={<PPunetoahmedtransportservice />} />
<Route path="/Pune-to-Surat-Transport-Service" element={<Punetosurattransport />} />
<Route path="/Pune-to-Nashik-Transport-Service" element={<Punetonashiktransport />} />
<Route path="/Pune-to-Nagpur-Transport-Service" element={<Punetonagpurtransport />} />
<Route path="/Pune-to-Kolhapur-Transport-Service" element={<Punetokolhapurtransport />} />
<Route path="/Pune-to-Goa-Transport-Service" element={<Punetogoatransportservice />} />
<Route path="/Pune-to-Indore-Transport-Service" element={<Punetoindoretransport />} />
<Route path="/Mumbai-to-Pune-Transport-Service" element={<Mumbaitopuetransportservice />} />
<Route path="/Bangalore-to-Pune-Transport-Service" element={<Bangloretopunetransport />} />
<Route path="/Hyderabad-to-Pune-Transport-Service" element={<Hyderabadtopunetransport />} />
<Route path="/Chennai-to-Pune-Transport-Service" element={<Chennaitopune />} />
<Route path="/Delhi-to-Pune-Transport-Service" element={<Delhitopunetransport />} />
<Route path="/LG-Transport-Services-Vendor-in-Pune" element={<Lgtransportservicevendor />} />
<Route path="/Samsung-Transportation-Vendor-in-Pune" element={<Samsungtransportvendor />} />
<Route path="/Transportation-Service-Company-in-PCMC" element={<Transportationservice />} />
<Route path="/Warehouse-Transportation-Company-in-Pune" element={<Werehousetransporttation />} />

     </Routes>


<FooterTwo/>
    </Router>
  );
}

export default App;
