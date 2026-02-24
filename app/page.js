import React from 'react';
import TopBar from './Components/topbar';
import Navbar from './Components/navbar';
import HeroSection from './Components/herosection';
import Offer from './Components/offer';
import ProductSection from './Components/product';
import DetailSection from './Components/product-details';
import EmbraceSection from './Components/embrance-section';
import HealthySwitch from './Components/healthy-switch';
import GreenSection from './Components/green-section';
import TestimonialsSection from './Components/testimonials-section';
import ReelSection from './Components/reel-section';
import ClientLogosSection from './Components/client-section';
import CTASection from './Components/cta-section';
import Footer from './Components/footer';



export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <Offer />
      <ProductSection />
      <DetailSection />
      <EmbraceSection />
      <HealthySwitch />
      <GreenSection />
      <TestimonialsSection />
      <ReelSection />
      <ClientLogosSection />
      <CTASection />
      <Footer />
      
    </>
  );
}
