
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import { Link } from "react-router-dom";
import { Wallet, Shield, Globe, CreditCard, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";

const DigitalWallets = () => {
  return (
    <PageLayout
      title="Digital Wallets"
      description="Secure and convenient payment options for your customers"
    >
      <section className="py-12 bg-gradient-to-br from-isentric-dark to-isentric-darkblue">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Transform Digital Payments with Advanced Wallet Solutions</h2>
            <p className="text-lg text-isentric-300">
              Our comprehensive digital wallet solutions enable financial institutions to provide customers 
              with secure, convenient, and frictionless payment experiences across all channels.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={100}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Wallet className="h-12 w-12 text-isentric-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Comprehensive Mobile Wallet Platform</h3>
                  <p className="text-isentric-300 mb-4">
                    A complete end-to-end solution for issuing, managing, and processing digital wallet transactions.
                    Support multiple payment methods, currencies, and integration with existing systems.
                  </p>
                  <ul className="space-y-2 text-isentric-300">
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Virtual and physical card management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>P2P transfers and bill payments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Loyalty and rewards integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-isentric-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Secure Transaction Processing</h3>
                  <p className="text-isentric-300 mb-4">
                    Industry-leading security features protect sensitive financial data and transactions,
                    giving customers peace of mind and building trust in your digital payment services.
                  </p>
                  <ul className="space-y-2 text-isentric-300">
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Tokenization and encryption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Biometric authentication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Real-time fraud monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <FeatureSection 
            title="Key Features of Our Digital Wallet Solutions" 
            description="Innovative technology to power the future of digital payments"
            features={[
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Global Payment Capabilities",
                description: "Support for multiple currencies and cross-border transactions to serve customers worldwide."
              },
              {
                icon: <CreditCard className="h-10 w-10" />,
                title: "Omni-Channel Integration",
                description: "Seamless payment experiences across mobile, web, and in-store channels."
              },
              {
                icon: <Smartphone className="h-10 w-10" />,
                title: "White-Label Mobile Apps",
                description: "Customizable apps with your branding to provide a consistent user experience."
              }
            ]}
          />
          
          <AnimatedSection delay={300} className="mt-16 mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-6 md:mb-0 md:pr-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Compass Plus Technologies</h3>
                    <p className="mb-4 text-isentric-300">
                      Our digital wallet solutions are powered by Compass Plus Technologies' award-winning platform,
                      providing a comprehensive suite of issuing, acquiring, and digital payment solutions for financial institutions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Zap className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">Visionary technology recognized by payment experts</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">Token-based, cloud-native, and API-first architecture</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">Scalable solution serving institutions of all sizes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <Wallet className="h-32 w-32 text-isentric-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Digital Payment Offerings?</h3>
            <p className="text-lg text-isentric-300 mb-8 max-w-2xl mx-auto">
              Partner with us to deliver secure, innovative digital wallet solutions that meet the evolving needs of your customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products/digital-banking">
                <Button size="lg">
                  Explore Digital Banking Solutions
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default DigitalWallets;
