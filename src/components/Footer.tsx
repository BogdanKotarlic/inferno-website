import React from "react";
import { Instagram, ChevronRight, Flame } from "lucide-react";
import XIcon from "./icons/XIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <Flame className="text-accent-purple" size={32} />
              <span className="text-gradient-animate">
                Inferno<span className="text-gradient-animate">Agency</span>
              </span>
            </div>
            <p className="text-text-secondary mb-4">
              Elite management services for creators. We handle the business,
              you create the content.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/inferno_agency_lv/"
                className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-secondary hover:text-accent-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/Inferno__Agency"
                className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-secondary hover:text-accent-purple transition-colors"
              >
                <XIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Services
                </a>
              </li>
              <li>
                <a
                  href="#for-creators"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> For Creators
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Results
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> About
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Apply
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-text-secondary mb-4">
              Interested in our services? Have questions? Get in touch with our
              team.
            </p>
            <a
              href="mailto:infernomanagementagency@gmail.com"
              className="text-accent-purple hover:underline"
            >
              infernomanagementagency@gmail.com
            </a>
            <p className="text-text-secondary mt-4">
              Las Vegas, NV
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-text-secondary text-sm">
          <p>
            © {new Date().getFullYear()} Inferno Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
