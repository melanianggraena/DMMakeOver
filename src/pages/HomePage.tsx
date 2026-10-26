import React, { useState } from 'react';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ValueProposition from '../components/sections/ValueProposition';
import BestSellers from '../components/sections/BestSellers';
import ShadeFinder from '../components/sections/ShadeFinder';
import SocialProof from '../components/sections/SocialProof';
import ArticlesSection from '../components/sections/ArticlesSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';
const HomePage: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (_productId: string) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <AnnouncementBar />
      <Header cartCount={cartCount} />
      <main>
        <HeroSection />
        <ValueProposition />
        <BestSellers onAddToCart={handleAddToCart} />
        <ShadeFinder />
        <SocialProof />
        <ArticlesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
