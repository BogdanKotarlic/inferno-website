import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ValueProposition from './components/ValueProposition';
import ResultsSection from './components/ResultsSection';
import AboutSection from './components/AboutSection';
import ApplicationCTA from './components/ApplicationCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set the page title
    document.title = 'Inferno Agency | Premium Creators Management';
    
    // Optional: Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Inferno Agency - Elite management for creators. Maximize your earnings and growth with our professional team.';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-dark text-text-primary">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ValueProposition />
      <ResultsSection />
      <AboutSection />
      <ApplicationCTA />
      <Footer />
    </div>
  );
}

export default App;