
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-isentric-midnight text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/8153c62a-3dfe-4344-9615-5499626df20d.png" 
                alt="iSentric Logo" 
                className="h-10 mb-4"
              />
            </Link>
            <p className="text-isentric-300 mb-6">
              Driving digital commerce through innovative financial technology and communication solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-isentric-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-isentric-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-isentric-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-isentric-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/messaging-solutions" className="text-isentric-300 hover:text-white transition-colors">
                  SMS Campaigns
                </Link>
              </li>
              <li>
                <Link to="/products/ai-chatbots" className="text-isentric-300 hover:text-white transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/products/digital-wallets" className="text-isentric-300 hover:text-white transition-colors">
                  Digital Wallets
                </Link>
              </li>
              <li>
                <Link to="/products/cybersecurity" className="text-isentric-300 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/products/email-marketing" className="text-isentric-300 hover:text-white transition-colors">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link to="/products/call-center-tools" className="text-isentric-300 hover:text-white transition-colors">
                  Call Center Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-isentric-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-isentric-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-isentric-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-isentric-300 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-isentric-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-isentric-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-isentric-300" />
                <span className="text-isentric-300">
                  iSentric Headquarters<br />
                  123 Finance Tower, Digital Ave<br />
                  Kuala Lumpur, Malaysia
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-isentric-300" />
                <span className="text-isentric-300">+60 3 1234 5678</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-isentric-300" />
                <span className="text-isentric-300">info@isentric.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-isentric-darkblue pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-isentric-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} iSentric. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-isentric-400">
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
