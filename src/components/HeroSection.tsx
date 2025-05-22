import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/video_test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-purple/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-accent-magenta/20 to-transparent"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-purple/10 blur-3xl animate-pulse z-0"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-magenta/10 blur-3xl animate-pulse z-0"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="animate-fade-in mb-6">
            Elevate Your <span className="gradient-text">Content Creation</span>{" "}
            Career With Elite Management
          </h1>

          <p className="animate-fade-in text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto">
            Join the agency that's helped creators increase their earnings by up
            to 500%. We handle the business, you create the content.
          </p>

          <div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#apply" className="btn-primary">
              Apply Now
            </a>
            <a href="#services" className="btn-outline">
              Learn More
            </a>
          </div>

          <div className="animate-fade-in mt-16 md:mt-24">
            <p className="text-text-muted mb-2">Discover how we can help</p>
            <a
              href="#services"
              className="inline-block text-accent-purple hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown size={36} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
