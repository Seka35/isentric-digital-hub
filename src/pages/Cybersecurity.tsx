
import React from "react";
import { Shield, Server, Database, Lock, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const Cybersecurity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Comprehensive Cybersecurity Solutions
              </h1>
              <p className="text-xl text-isentric-200 mb-8">
                Protect your business with our on-site cybersecurity assessment and implementation services tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-isentric-600 hover:bg-isentric-700 text-white">
                  Get a Security Assessment
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-isentric-900">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Cybersecurity Protection" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Threats Section */}
      <section className="py-20 bg-isentric-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Secure is Your Business?
            </h2>
            <p className="text-lg text-isentric-300 max-w-3xl mx-auto">
              In today's digital landscape, financial institutions, corporations, and media outlets rely heavily on online platforms for transactions, customer interactions, and data management. Nearly 60% of businesses are at risk of cyber threats.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <Card className="border-isentric-700/40 bg-isentric-800 shadow-sm h-full">
                <CardContent className="p-6">
                  <div className="bg-isentric-900 p-3 rounded-md w-fit mb-4">
                    <Database className="h-7 w-7 text-isentric-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Data Breaches</h3>
                  <p className="text-isentric-300">
                    Cybercriminals can infiltrate your system, deleting or corrupting critical data. Fintech companies are particularly vulnerable to DDoS attacks, brute force intrusions, and hacking attempts—resulting in massive financial losses.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="border-isentric-700/40 bg-isentric-800 shadow-sm h-full">
                <CardContent className="p-6">
                  <div className="bg-isentric-900 p-3 rounded-md w-fit mb-4">
                    <Server className="h-7 w-7 text-isentric-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Malware Attacks</h3>
                  <p className="text-isentric-300">
                    Hackers deploy malicious software, viruses, and trojans to gain unauthorized access to company devices. Our cybersecurity experts utilize advanced filtering techniques to block suspicious software and IP addresses.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Card className="border-isentric-700/40 bg-isentric-800 shadow-sm h-full">
                <CardContent className="p-6">
                  <div className="bg-isentric-900 p-3 rounded-md w-fit mb-4">
                    <Lock className="h-7 w-7 text-isentric-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Ransomware Attacks</h3>
                  <p className="text-isentric-300">
                    Ransomware locks your system and encrypts sensitive files until a ransom is paid. These attacks often go undetected until it's too late. Our team deploys proactive security strategies to prevent unauthorized access.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Protection Process Section */}
      <section className="py-20 bg-isentric-navy">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Protect Your Business
            </h2>
            <p className="text-lg text-isentric-300 max-w-3xl mx-auto">
              At iSentric, we provide cost-effective, tailored cybersecurity solutions to safeguard your business through a comprehensive process.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-isentric-800 rounded-lg shadow-md p-8 border border-isentric-700/40 h-full">
                <div className="bg-isentric-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-isentric-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Risk Assessment</h3>
                <p className="text-isentric-300 mb-4">
                  We conduct on-site evaluations of your network, software, hardware, and firewall configurations to detect vulnerabilities before they are exploited.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Network security analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Software vulnerability scanning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Hardware configuration review</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-isentric-800 rounded-lg shadow-md p-8 border border-isentric-700/40 h-full">
                <div className="bg-isentric-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Lock className="h-8 w-8 text-isentric-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proactive Threat Mitigation</h3>
                <p className="text-isentric-300 mb-4">
                  Our experts replace outdated systems, install advanced security protocols, and optimize your firewall for maximum protection with real-time encryption.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Advanced firewall configuration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Security patch management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Real-time encryption implementation</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-isentric-800 rounded-lg shadow-md p-8 border border-isentric-700/40 h-full">
                <div className="bg-isentric-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-isentric-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Ongoing Cybersecurity Support</h3>
                <p className="text-isentric-300 mb-4">
                  Cyber threats evolve constantly, and so do we. Our team monitors your system 24/7, implements security updates, and provides immediate support in case of any breach attempt.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">24/7 security monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Regular security updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-isentric-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-isentric-300">Incident response & recovery</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-isentric-darkblue text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Our cybersecurity solutions are designed with your business in mind, offering unparalleled protection and support.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-isentric-800 p-6 rounded-lg border border-isentric-700 h-full">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-isentric-400 mr-2" />
                  Customized Security Plans
                </h3>
                <p className="text-isentric-300">
                  We design security solutions tailored to your specific business needs rather than a one-size-fits-all approach.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-isentric-800 p-6 rounded-lg border border-isentric-700 h-full">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-isentric-400 mr-2" />
                  Hands-On Protection
                </h3>
                <p className="text-isentric-300">
                  Unlike competitors who rely solely on remote assistance, we provide on-site cybersecurity evaluations and solutions for complete protection.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-isentric-800 p-6 rounded-lg border border-isentric-700 h-full">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-isentric-400 mr-2" />
                  Proven Expertise
                </h3>
                <p className="text-isentric-300">
                  With 7+ years of experience, we deliver cost-effective, high-quality cybersecurity services that protect your business from every angle.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-isentric-dark">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-isentric-navy to-isentric-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Secure Your Business Before Cyber Threats Become Cyber Disasters
                </h2>
                <p className="text-isentric-200 mb-0">
                  Get in touch with us today for a comprehensive cybersecurity assessment tailored to your business needs.
                </p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <Link to="/contact">
                  <Button size="lg" className="bg-isentric-600 text-white hover:bg-isentric-700">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
