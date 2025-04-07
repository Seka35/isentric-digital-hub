
import React from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Tag, Shield, BarChart, Smartphone, Globe, DollarSign, RefreshCw, Users, MessageCircle } from "lucide-react";

const BNPLSolution = () => {
  const keyFeatureSections = [
    {
      title: "Custom Branding & White Labeling",
      icon: <Tag className="h-6 w-6 text-isentric-accent" />,
      features: [
        "Fully customizable BNPL platform with your company's branding",
        "Personalized UI/UX to match your brand identity",
        "White-labeled customer portals and mobile app integration"
      ]
    },
    {
      title: "Flexible Payment Plans",
      icon: <DollarSign className="h-6 w-6 text-isentric-accent" />,
      features: [
        "Customizable installment options (e.g., 3, 6, 12, 24 months)",
        "Interest-free and interest-bearing financing options",
        "Automated payment scheduling and reminders"
      ]
    },
    {
      title: "Seamless Merchant Integration",
      icon: <Smartphone className="h-6 w-6 text-isentric-accent" />,
      features: [
        "Easy API integration with eCommerce platforms, POS systems & mobile apps",
        "Plugin support for Shopify, WooCommerce, Magento, and more",
        "Dedicated merchant dashboard for transaction tracking and management"
      ]
    },
    {
      title: "Real-Time Credit Scoring & Risk Management",
      icon: <Shield className="h-6 w-6 text-isentric-accent" />,
      features: [
        "AI-driven risk assessment and fraud detection",
        "Instant credit approval process",
        "Compliance with regulatory requirements for responsible lending"
      ]
    },
    {
      title: "Automated Settlements & Reconciliation",
      icon: <RefreshCw className="h-6 w-6 text-isentric-accent" />,
      features: [
        "Instant payouts to merchants with real-time settlement processing",
        "Automated reconciliation for accurate financial reporting",
        "Detailed analytics and reporting dashboard"
      ]
    }
  ];

  const additionalFeatures = [
    {
      title: "Omni-Channel Customer Experience",
      icon: <Users className="h-6 w-6 text-isentric-accent" />,
      description: "BNPL available for online, in-store, and mobile transactions with unified customer profiles for seamless cross-channel engagement."
    },
    {
      title: "Secure & Compliant Transactions",
      icon: <Shield className="h-6 w-6 text-isentric-accent" />,
      description: "PCI-DSS compliant security with end-to-end encryption and fraud prevention measures that meet various financial jurisdictions."
    },
    {
      title: "Marketing & Customer Retention Tools",
      icon: <BarChart className="h-6 w-6 text-isentric-accent" />,
      description: "Personalized BNPL offers, promotions, loyalty programs, and behavioral analytics to drive customer engagement."
    },
    {
      title: "Multi-Currency & Global Scalability",
      icon: <Globe className="h-6 w-6 text-isentric-accent" />,
      description: "Support for multiple currencies, cross-border transactions, and multi-language interfaces for international customers."
    },
    {
      title: "24/7 Support & Dedicated Account Management",
      icon: <MessageCircle className="h-6 w-6 text-isentric-accent" />,
      description: "Round-the-clock customer and merchant support with dedicated account managers for seamless business operations."
    }
  ];

  const benefits = [
    "Increase average order value by up to 40%",
    "Boost conversion rates with flexible payment options",
    "Reduce cart abandonment with instant financing",
    "Expand customer base, especially millennials and Gen Z",
    "Improve cash flow with upfront merchant payments",
    "Enhance customer loyalty through flexible payment experiences",
    "Gain competitive advantage in your market",
    "Access valuable customer insights and spending patterns"
  ];

  return (
    <PageLayout 
      title="BNPL Solution" 
      description="Empower your business with our flexible Buy Now, Pay Later (BNPL) white-label solution, designed to enhance customer purchasing power and drive business growth."
      heroBackground="bg-gradient-to-br from-isentric-navy to-isentric-dark"
    >
      {/* Introduction */}
      <section className="py-16 bg-isentric-darkblue">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="text-lg text-isentric-300 mb-6">
              Our end-to-end BNPL platform allows businesses to offer seamless installment payment options while maintaining complete brand control. Designed for flexibility and scalability, our BNPL solution integrates easily with your existing systems to provide a frictionless experience for both merchants and customers.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-20 bg-isentric-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">Key Features & Benefits</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Our comprehensive BNPL solution offers everything you need to implement flexible payment options
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyFeatureSections.map((section, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <Card className="h-full bg-gradient-to-br from-isentric-800 to-isentric-navy border-isentric-700/50 rounded-xl">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-isentric-900/80 p-3 rounded-lg shadow-md mr-4 border border-isentric-700/40">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                    </div>
                    <Separator className="mb-4 bg-isentric-700/50" />
                    <ul className="space-y-3">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckSquare className="h-5 w-5 text-green-500 mr-3 mt-1" />
                          <span className="text-isentric-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-20 bg-isentric-navy">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">Additional Features</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Enhanced capabilities to maximize the value of your BNPL offering
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="bg-gradient-to-br from-isentric-dark to-isentric-darkblue p-6 rounded-xl h-full border border-isentric-700/50 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-isentric-800/80 p-2 rounded-lg shadow-sm mr-3 border border-isentric-700/40">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-isentric-300">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Benefits */}
      <section className="py-20 bg-isentric-darkblue text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">Business Benefits</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Transform your business and boost growth with our BNPL solution
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={50 * index}>
                <div className="bg-gradient-to-br from-isentric-navy to-isentric-dark border border-isentric-700/50 p-6 rounded-xl h-full flex items-center shadow-md">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <p className="text-isentric-200">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BNPLSolution;
