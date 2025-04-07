
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import { Shield, Lock, AlertCircle, FileSearch, Clock, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

const FraudPrevention = () => {
  const isMobile = useIsMobile();
  
  return (
    <PageLayout
      title="Fraud Prevention"
      description="Advanced fraud prevention solutions to safeguard your business and customers"
      heroBackground="bg-gradient-to-br from-isentric-navy to-isentric-dark"
    >
      <section className="py-12 bg-gradient-to-br from-isentric-dark to-isentric-darkblue">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Protecting Your Business From Financial Fraud</h2>
            <p className="text-lg text-isentric-300">
              In today's digital landscape, fraud prevention is more critical than ever. Our advanced solutions help detect, 
              prevent, and mitigate financial fraud across all channels and touchpoints.
            </p>
          </AnimatedSection>
          
          {/* Video Section */}
          <AnimatedSection className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden border-2 border-isentric-700/40 shadow-xl shadow-isentric-900/30">
                <AspectRatio ratio={16/9} className="bg-isentric-navy">
                  <iframe
                    src="https://www.youtube.com/embed/s0yyDDNeYsQ"
                    title="Fraud Prevention Solutions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </AspectRatio>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={100}>
              <Card className="h-full bg-isentric-800 border-isentric-700/40">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-isentric-accent mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Real-time Fraud Detection</h3>
                  <p className="text-isentric-300 mb-4">
                    Our AI-powered system monitors transactions in real-time, identifying suspicious patterns and flagging 
                    potential fraud before it impacts your business.
                  </p>
                  <ul className="space-y-2 text-isentric-300">
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Advanced machine learning algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Behavioral analytics and pattern recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Instant alerts and automated responses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="h-full bg-isentric-800 border-isentric-700/40">
                <CardContent className="pt-6">
                  <Lock className="h-12 w-12 text-isentric-accent mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Multi-layered Authentication</h3>
                  <p className="text-isentric-300 mb-4">
                    Implement robust security measures without compromising user experience. Our multi-factor authentication 
                    solutions create friction for fraudsters while keeping it smooth for legitimate users.
                  </p>
                  <ul className="space-y-2 text-isentric-300">
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Biometric verification options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>One-time passwords and secure tokens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-isentric-accent mr-2">✓</span>
                      <span>Risk-based authentication flows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <FeatureSection 
            title="Comprehensive Fraud Protection" 
            description="Our end-to-end fraud prevention platform protects your business at every touchpoint"
            features={[
              {
                icon: <AlertCircle className="h-10 w-10 text-isentric-400" />,
                title: "Transaction Monitoring",
                description: "Continuous monitoring of all transactions to detect and prevent fraudulent activities in real-time."
              },
              {
                icon: <FileSearch className="h-10 w-10 text-isentric-400" />,
                title: "Identity Verification",
                description: "Robust KYC and document verification to ensure customers are who they claim to be."
              },
              {
                icon: <Clock className="h-10 w-10 text-isentric-400" />,
                title: "Chargeback Protection",
                description: "Advanced tools to reduce chargebacks and recover revenues lost to friendly fraud."
              },
              {
                icon: <Database className="h-10 w-10 text-isentric-400" />,
                title: "Data Analysis",
                description: "Utilizing big data analytics to identify patterns and predict potential fraud attempts."
              },
              {
                icon: <LineChart className="h-10 w-10 text-isentric-400" />,
                title: "Predictive Risk Scoring",
                description: "Dynamic risk assessment that adapts to evolving threats and fraud techniques."
              },
              {
                icon: <Shield className="h-10 w-10 text-isentric-400" />,
                title: "24/7 Fraud Monitoring",
                description: "Around-the-clock surveillance with real-time alerts to protect your business at all times."
              }
            ]}
            className="bg-isentric-navy"
          />
          
          <AnimatedSection className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Protect Your Business?</h3>
            <p className="text-lg text-isentric-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our fraud prevention specialists to learn how our solutions can safeguard your business.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Request a Demo
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default FraudPrevention;
