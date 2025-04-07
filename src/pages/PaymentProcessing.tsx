
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import { Link } from "react-router-dom";
import { CreditCard, ShieldCheck, BarChart3, Globe, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";

const PaymentProcessing = () => {
  return (
    <PageLayout
      title="Payment Processing"
      description="Streamline transactions with our secure payment infrastructure"
    >
      <section className="py-12 bg-gradient-to-br from-isentric-dark to-isentric-darkblue">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Secure & Scalable Payment Processing Solutions</h2>
            <p className="text-lg text-isentric-300">
              Our comprehensive payment processing platform enables businesses to accept payments securely across
              multiple channels, optimize transaction flows, and enhance the customer experience.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AnimatedSection delay={100}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <CreditCard className="h-12 w-12 text-isentric-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Omni-Channel Payments</h3>
                  <p className="text-isentric-300 mb-4">
                    Accept payments across all channels—online, in-store, mobile, and more—with a single, unified platform.
                  </p>
                  <ul className="space-y-2 text-isentric-300">
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Web payments and checkout pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Mobile payment acceptance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>POS integration capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <ShieldCheck className="h-12 w-12 text-isentric-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Advanced Security</h3>
                  <p className="text-isentric-300 mb-4">
                    Protect sensitive payment data with industry-leading security measures and compliance standards.
                  </p>
                  <ul className="space-y-2 text-isentric-300">
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>PCI-DSS compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Tokenization and encryption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Fraud detection and prevention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <BarChart3 className="h-12 w-12 text-isentric-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Business Intelligence</h3>
                  <p className="text-isentric-300 mb-4">
                    Gain valuable insights from comprehensive reporting and analytics to optimize your payment operations.
                  </p>
                  <ul className="space-y-2 text-isentric-300">
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Transaction reporting and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Customer payment behavior insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Revenue and settlement tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <FeatureSection 
            title="Comprehensive Payment Solutions" 
            description="Our end-to-end payment platform addresses all aspects of modern payment processing"
            features={[
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Global Payment Capabilities",
                description: "Accept payments in multiple currencies and support international transactions seamlessly."
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "High-Performance Processing",
                description: "Reliable and fast transaction processing with minimal latency and maximum uptime."
              },
              {
                icon: <Settings className="h-10 w-10" />,
                title: "Flexible Integration",
                description: "Easy integration with your existing systems through RESTful APIs and developer tools."
              }
            ]}
          />
          
          <AnimatedSection delay={100} className="mt-16">
            <Card>
              <CardContent className="pt-8 px-6 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Acquiring Solutions</h3>
                    <p className="text-isentric-300 mb-4">
                      Our acquiring solutions support merchant acquiring services, enabling efficient transaction processing from various payment channels.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-isentric-accent mr-2">•</span>
                        <span className="text-isentric-300">Transaction authorization, clearing, and settlement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-isentric-accent mr-2">•</span>
                        <span className="text-isentric-300">Comprehensive merchant management tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-isentric-accent mr-2">•</span>
                        <span className="text-isentric-300">Visionary technology for industry innovators</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Issuing Solutions</h3>
                    <p className="text-isentric-300 mb-4">
                      Our robust issuing solutions enable financial institutions to manage the entire lifecycle of payment cards.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-isentric-accent mr-2">•</span>
                        <span className="text-isentric-300">Card issuance, personalization, and management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-isentric-accent mr-2">•</span>
                        <span className="text-isentric-300">Support for credit, debit, prepaid, and virtual cards</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-isentric-accent mr-2">•</span>
                        <span className="text-isentric-300">Cutting-edge platform for differentiation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Streamline Your Payment Processing?</h3>
            <p className="text-lg text-isentric-300 mb-8 max-w-2xl mx-auto">
              Partner with us to implement a secure, efficient payment processing solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products/digital-banking">
                <Button size="lg">
                  Explore Payment Solutions
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default PaymentProcessing;
