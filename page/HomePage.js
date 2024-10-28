import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </>
  );
};

export default HomePage;