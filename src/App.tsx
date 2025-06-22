import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ParallaxVisual from './components/ParallaxVisual';
import CategoryExplorer from './components/CategoryExplorer';
import GuideShowcase from './components/GuideShowcase';
import Testimonials from './components/Testimonials';
import ProcessTimeline from './components/ProcessTimeline';
import MantraMoment from './components/MantraMoment';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden relative">
      {/* Navigation */}
      <Navigation />

      {/* Subtle breathing background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#EAE6FB] to-[#FAD6CF] rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#DDEDE3] to-[#FAFAF8] rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#FAD6CF] to-[#EAE6FB] rounded-full blur-3xl animate-drift" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-[#FAFAF8] to-[#DDEDE3] rounded-full blur-3xl animate-breathe" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <ParallaxVisual />
        <section id="categories">
          <CategoryExplorer />
        </section>
        <section id="guides">
          <GuideShowcase />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="process">
          <ProcessTimeline />
        </section>
        <MantraMoment />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;