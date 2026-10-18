import React from 'react';
import MainSlider from './MainSlider ';
import FeatureOne from '../pages/FeatureOne';
import AboutTwo from '../pages/AboutTwo';
import ServicesTwo from '../pages/ServicesTwo';
import WhyChooseTwo from '../pages/WhyChooseTwo';
import CtaOne from '../pages/CtaOne';
import ProjectOne from '../pages/ProjectOne';
import CounterTwo from '../pages/CounterTwo';
import FindTransport from '../pages/FindTransport';
import TestimonialTwo from '../pages/TestimonialTwo';
import ContactOne from '../pages/ContactOne';
import TeamTwo from '../pages/TeamTwo';
import BlogTwo from '../pages/BlogTwo';
import BrandOne from '../pages/BrandOne';
import Clients from './Clients';
import Leadership from './Leadership';
import Carousel from './Carousel';
import ContactSection from './ContactSection';
import Expertise from '../pages/Expertise.js';
import OurClients from '../pages/OURCLIENTS.js';
import WhyChooseUs from '../pages/WhyChooseUs.js';
import Serviceshome from '../pages/SERVICESHome.js';
import Expertisehome from '../pages/Expertisehome.js';
import SSKNetworkMap from '../pages/SSKNetworkMap.js';






const HeroSection = () => {
  
  return (

    // <div className="th-hero-wrapper hero-1" id="hero">
    //        <MainSlider/>
    //        <FeatureOne/>
    //        <AboutTwo/>
    //        <ServicesTwo/>
    //        <WhyChooseTwo/>
    //        <CtaOne/>
    //        <ProjectOne/>
    //        <CounterTwo/>
    //        <FindTransport/>
    //        <TestimonialTwo/>
    //        <ContactOne/>
    //        <TeamTwo/>
    //        <BlogTwo/>
    //        <BrandOne/>


    // </div>

    <>
{/* <div id="home">
    <VideoSlider />
</div>





 */}



  <div id="home">
    <Carousel />
</div>


<div id="about">
    <AboutTwo />
</div>


<Serviceshome/>
<WhyChooseUs/>
<Expertisehome/>
<SSKNetworkMap/>
{/* <div id="clients">
    <Clients />
</div> */}

<OurClients/>
<div id="testimonials">
    <TestimonialTwo />
</div>

{/* <Leadership/> */}

{/* <div id="contact">
    <ContactSection/>
</div> */}
</>
  );
};

export default HeroSection;
