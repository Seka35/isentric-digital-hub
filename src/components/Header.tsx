
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  MessageSquare, 
  CreditCard, 
  Shield, 
  Phone, 
  Menu, 
  X,
  DollarSign,
  Users,
  BarChart,
  Bot,
  Wallet,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState("");
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMegaMenu = (menu: string) => {
    if (megaMenuOpen === menu) {
      setMegaMenuOpen("");
    } else {
      setMegaMenuOpen(menu);
    }
  };

  const toggleMobileSubmenu = (menu: string) => {
    if (mobileSubmenuOpen === menu) {
      setMobileSubmenuOpen("");
    } else {
      setMobileSubmenuOpen(menu);
    }
  };

  const closeMegaMenu = () => {
    setMegaMenuOpen("");
  };

  // Solution mega menu content
  const SolutionsContent = () => (
    <div className="p-4 space-y-4">
      <h3 className="font-semibold text-white mb-2">Communication Solutions</h3>
      <ul className="space-y-2">
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <MessageSquare className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/solutions/messaging-solutions" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Messaging Solutions
          </Link>
        </li>
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <Bot className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/solutions/ai-chatbots" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            AI Chatbots
          </Link>
        </li>
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <Phone className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/solutions/call-center-tools" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Call Center Tools
          </Link>
        </li>
      </ul>

      <h3 className="font-semibold text-white mb-2 mt-4">Financial Solutions</h3>
      <ul className="space-y-2">
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <Wallet className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/solutions/digital-wallets" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Digital Wallets
          </Link>
        </li>
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <CreditCard className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/solutions/payment-processing" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Payment Processing
          </Link>
        </li>
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <Shield className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/solutions/fraud-prevention" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Fraud Prevention
          </Link>
        </li>
      </ul>

      <div className="mt-6 pt-4 border-t border-isentric-700">
        <Link
          to="/solutions"
          className="text-isentric-300 hover:text-white font-medium flex items-center"
          onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu}
        >
          View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );

  // Products mega menu content
  const ProductsContent = () => (
    <div className="p-4 space-y-4">
      <h3 className="font-semibold text-white mb-2">Featured Products</h3>
      <ul className="space-y-2">
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <MessageSquare className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/products/whatsapp-business" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            WhatsApp Business API
          </Link>
        </li>
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <Bot className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/products/robolab-chatbot" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Robolab Chatbot
          </Link>
        </li>
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <DollarSign className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/products/bnpl-solution" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            BNPL Solution
          </Link>
        </li>
      </ul>

      <h3 className="font-semibold text-white mb-2 mt-4">Security Products</h3>
      <ul className="space-y-2">
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <Shield className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/products/fraud-prevention" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Fraud Prevention
          </Link>
        </li>
        <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
          <Shield className="h-5 w-5 mr-2 text-isentric-accent" />
          <Link to="/products/cybersecurity" onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu} className="block w-full">
            Cybersecurity
          </Link>
        </li>
      </ul>

      <div className="mt-6 pt-4 border-t border-isentric-700">
        <Link
          to="/products"
          className="text-isentric-300 hover:text-white font-medium flex items-center"
          onClick={isMobile ? () => setMobileMenuOpen(false) : closeMegaMenu}
        >
          View All Products <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-isentric-dark/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8153c62a-3dfe-4344-9615-5499626df20d.png" 
            alt="iSentric Logo" 
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button
              className="flex items-center text-white hover:text-isentric-300 transition-colors"
              onClick={() => toggleMegaMenu("solutions")}
            >
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {megaMenuOpen === "solutions" && (
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-isentric-dark text-white shadow-lg rounded-md overflow-hidden border border-isentric-700">
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Communication Solutions</h3>
                    <ul>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <MessageSquare className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/solutions/messaging-solutions" onClick={closeMegaMenu} className="block w-full">
                          Messaging Solutions
                        </Link>
                      </li>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <Bot className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/solutions/ai-chatbots" onClick={closeMegaMenu} className="block w-full">
                          AI Chatbots
                        </Link>
                      </li>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <Phone className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/solutions/call-center-tools" onClick={closeMegaMenu} className="block w-full">
                          Call Center Tools
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Financial Solutions</h3>
                    <ul>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <Wallet className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/solutions/digital-wallets" onClick={closeMegaMenu} className="block w-full">
                          Digital Wallets
                        </Link>
                      </li>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <CreditCard className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/solutions/payment-processing" onClick={closeMegaMenu} className="block w-full">
                          Payment Processing
                        </Link>
                      </li>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <Shield className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/solutions/fraud-prevention" onClick={closeMegaMenu} className="block w-full">
                          Fraud Prevention
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-isentric-800 p-4">
                  <Link
                    to="/solutions"
                    className="text-isentric-300 hover:text-white font-medium flex items-center"
                    onClick={closeMegaMenu}
                  >
                    View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="flex items-center text-white hover:text-isentric-300 transition-colors"
              onClick={() => toggleMegaMenu("products")}
            >
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {megaMenuOpen === "products" && (
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-isentric-dark text-white shadow-lg rounded-md overflow-hidden border border-isentric-700">
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Featured Products</h3>
                    <ul>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <MessageSquare className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/products/whatsapp-business" onClick={closeMegaMenu} className="block w-full">
                          WhatsApp Business API
                        </Link>
                      </li>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <Bot className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/products/robolab-chatbot" onClick={closeMegaMenu} className="block w-full">
                          Robolab Chatbot
                        </Link>
                      </li>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <DollarSign className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/products/bnpl-solution" onClick={closeMegaMenu} className="block w-full">
                          BNPL Solution
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Security Products</h3>
                    <ul>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <Shield className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/products/fraud-prevention" onClick={closeMegaMenu} className="block w-full">
                          Fraud Prevention
                        </Link>
                      </li>
                      <li className="py-2 flex items-center hover:bg-isentric-800 px-2 rounded-md">
                        <Shield className="h-5 w-5 mr-2 text-isentric-accent" />
                        <Link to="/products/cybersecurity" onClick={closeMegaMenu} className="block w-full">
                          Cybersecurity
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-isentric-800 p-4">
                  <Link
                    to="/products"
                    className="text-isentric-300 hover:text-white font-medium flex items-center"
                    onClick={closeMegaMenu}
                  >
                    View All Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="text-white hover:text-isentric-300 transition-colors">
            About
          </Link>
          
          <Link to="/contact" className="text-white hover:text-isentric-300 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="default" className="bg-isentric-accent hover:bg-isentric-accent/80 text-white">
              Request a Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-isentric-dark border-isentric-700 text-white p-0 w-full sm:max-w-md overflow-auto">
            <SheetHeader className="p-6 border-b border-isentric-700">
              <SheetTitle className="text-white">Menu</SheetTitle>
              <SheetDescription className="text-isentric-300">
                Navigate through our solutions and products
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 px-6">
              <nav className="flex flex-col space-y-2">
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-lg font-medium text-white hover:text-isentric-300 border-b border-isentric-700">
                    <span>Solutions</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2">
                    <SolutionsContent />
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-lg font-medium text-white hover:text-isentric-300 border-b border-isentric-700">
                    <span>Products</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2">
                    <ProductsContent />
                  </CollapsibleContent>
                </Collapsible>

                <Link 
                  to="/about" 
                  className="text-white py-3 border-b border-isentric-700 text-lg"
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-white py-3 border-b border-isentric-700 text-lg"
                >
                  Contact
                </Link>
                
                <div className="pt-6">
                  <Link to="/contact" className="w-full block">
                    <Button className="bg-isentric-accent hover:bg-isentric-accent/80 text-white w-full">
                      Request a Demo
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
