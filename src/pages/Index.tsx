import React from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight, MessageSquare, Bot, Wallet, Shield, Mail, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-isentric-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-isentric-dark via-isentric-navy to-isentric-deepblue pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight lg:text-5xl">
                Empowering Businesses Through Financial Technology & Communication
              </h1>
              <p className="text-xl text-isentric-200 mb-8">
                Seamless, secure, and scalable digital transformation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions">
                  <Button className="bg-isentric-accent hover:bg-isentric-accent/80 text-white">
                    Explore Solutions
                  </Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 flex items-center">
                  <Play className="mr-2 h-4 w-4" /> Watch Video
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end mx-[2px] my-0">
              <div className="relative w-full max-w-[calc(1.5*25rem)] rounded-[5px] border border-isentric-700 overflow-hidden shadow-lg">
                <AspectRatio ratio={16 / 9} className="bg-isentric-navy">
                  <iframe src="https://www.youtube.com/embed/s0yyDDNeYsQ" title="iSentric Company Overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-isentric-navy to-isentric-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image moved from right to left */}
            <AnimatedSection animation="slide-in-left" className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12" delay={200}>
              <div className="rounded-[10px] overflow-hidden border border-isentric-700">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="iSentric team collaboration" className="w-full h-auto object-cover rounded-[10px] shadow-lg" />
              </div>
            </AnimatedSection>
            
            {/* Text moved from left to right */}
            <AnimatedSection animation="slide-in-right" className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-lg text-isentric-300 mb-6">
                iSentric is a leading fintech and communications solutions provider that enables businesses to thrive in the digital economy. Our innovative platforms drive efficiency, enhance customer engagement, and accelerate growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-isentric-800 p-2 rounded-md mr-4">
                    <CreditCard className="h-6 w-6 text-isentric-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Payment Processing</h3>
                    <p className="text-isentric-300">Secure and scalable payment solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-isentric-800 p-2 rounded-md mr-4">
                    <MessageSquare className="h-6 w-6 text-isentric-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Real-time Messaging</h3>
                    <p className="text-isentric-300">Engage customers on their preferred channels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-isentric-800 p-2 rounded-md mr-4">
                    <Shield className="h-6 w-6 text-isentric-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fraud Prevention</h3>
                    <p className="text-isentric-300">Advanced security to protect transactions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-isentric-800 p-2 rounded-md mr-4">
                    <Smartphone className="h-6 w-6 text-isentric-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Omnichannel Banking</h3>
                    <p className="text-isentric-300">Seamless digital banking experiences</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-isentric-dark via-isentric-navy to-isentric-deepblue">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions Overview</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Our comprehensive suite of solutions is designed to address the evolving needs of modern businesses
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <Link to="/solutions/messaging-solutions" className="block h-full">
                <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500">
                  <CardHeader>
                    <div className="bg-isentric-800 p-3 rounded-md inline-block mb-4">
                      <MessageSquare className="h-8 w-8 text-isentric-300" />
                    </div>
                    <CardTitle>Messaging Solutions</CardTitle>
                    <CardDescription>
                      Target your audience with personalized messaging
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-isentric-300">
                      Reach customers with timely and relevant messaging campaigns that drive engagement and conversions.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Link to="/solutions/ai-chatbots" className="block h-full">
                <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500">
                  <CardHeader>
                    <div className="bg-isentric-800 p-3 rounded-md inline-block mb-4">
                      <Bot className="h-8 w-8 text-isentric-300" />
                    </div>
                    <CardTitle>AI Chatbots</CardTitle>
                    <CardDescription>
                      Intelligent conversational experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-isentric-300">
                      Deploy AI-powered chatbots that provide instant customer support and streamline business processes.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Link to="/products/digital-banking" className="block h-full">
                <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500">
                  <CardHeader>
                    <div className="bg-isentric-800 p-3 rounded-md inline-block mb-4">
                      <Wallet className="h-8 w-8 text-isentric-300" />
                    </div>
                    <CardTitle>Digital Wallets</CardTitle>
                    <CardDescription>
                      Secure and convenient payment options
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-isentric-300">
                      Enable seamless transactions with digital wallet solutions that prioritize security and user experience.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <Link to="/products/cybersecurity" className="block h-full">
                <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500">
                  <CardHeader>
                    <div className="bg-isentric-800 p-3 rounded-md inline-block mb-4">
                      <Shield className="h-8 w-8 text-isentric-300" />
                    </div>
                    <CardTitle>Cybersecurity</CardTitle>
                    <CardDescription>
                      Protect your digital assets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-isentric-300">
                      Comprehensive security solutions to safeguard your business against evolving cyber threats.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <Link to="/products/electronic-direct-mailing" className="block h-full">
                <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500">
                  <CardHeader>
                    <div className="bg-isentric-800 p-3 rounded-md inline-block mb-4">
                      <Mail className="h-8 w-8 text-isentric-300" />
                    </div>
                    <CardTitle>Email Marketing</CardTitle>
                    <CardDescription>
                      Drive engagement with targeted campaigns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-isentric-300">
                      Create and deliver compelling email campaigns that resonate with your audience and drive results.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <Link to="/products/call-centre-solutions" className="block h-full">
                <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500">
                  <CardHeader>
                    <div className="bg-isentric-800 p-3 rounded-md inline-block mb-4">
                      <Headphones className="h-8 w-8 text-isentric-300" />
                    </div>
                    <CardTitle>Call Center Tools</CardTitle>
                    <CardDescription>
                      Streamline customer support
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-isentric-300">
                      Enhance customer service with advanced call center tools that improve efficiency and satisfaction.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/solutions">
              <Button className="bg-isentric-accent hover:bg-isentric-accent/80 text-white">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-gradient-to-br from-isentric-navy to-isentric-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Product Feature Highlights
            </h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Discover our flagship products designed to transform how businesses operate
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-gradient-to-br from-isentric-darkblue to-isentric-navy rounded-xl overflow-hidden shadow-lg border border-isentric-700/40">
                <div className="h-48 bg-isentric-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="WhatsApp Business API" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp Business API</h3>
                  <p className="text-isentric-300 mb-4">
                    Connect with customers on their preferred messaging platform with verified business accounts.
                  </p>
                  <Link to="/products/whatsapp-business">
                    <Button className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-isentric-darkblue to-isentric-navy rounded-xl overflow-hidden shadow-lg border border-isentric-700/40">
                <div className="h-48 bg-isentric-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Robolab Chatbot" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Robolab Chatbot</h3>
                  <p className="text-isentric-300 mb-4">
                    AI-powered conversational agents that provide 24/7 customer service and support.
                  </p>
                  <Link to="/products/robolab-chatbot">
                    <Button className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-gradient-to-br from-isentric-darkblue to-isentric-navy rounded-xl overflow-hidden shadow-lg border border-isentric-700/40">
                <div className="h-48 bg-isentric-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="BNPL Solution" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">BNPL Solution</h3>
                  <p className="text-isentric-300 mb-4">
                    Flexible buy-now-pay-later options that increase conversions and average order value.
                  </p>
                  <Link to="/products/bnpl-solution">
                    <Button className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/products">
              <Button className="bg-isentric-accent hover:bg-isentric-accent/80 text-white">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gradient-to-br from-isentric-deepblue to-isentric-dark border-t border-isentric-800/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-white mb-2">Trusted by Leading Companies</h2>
            <p className="text-isentric-300">
              Join the growing list of businesses that rely on iSentric for their digital transformation
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <AnimatedSection key={item} delay={item * 100} className="flex justify-center">
                <div className="h-28 w-64 flex items-center justify-center">
                  <img 
                    src={`/partnaire/logo${item}.png`}
                    alt={`Partner Logo ${item}`}
                    className="w-full h-full object-contain transition-all duration-300 hover:scale-110 hover:brightness-125"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-isentric-dark via-isentric-navy to-isentric-deepblue border-t border-isentric-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-isentric-200 mb-8">
                Get in touch with our team to discover how iSentric can help you achieve your digital transformation goals.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-isentric-accent hover:bg-isentric-accent/80 text-white px-8 py-6">
                  Request a Demo
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;

// Missing import for Smartphone icon
import { Smartphone, CreditCard } from "lucide-react";
