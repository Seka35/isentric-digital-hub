
import React from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureSection from "@/components/FeatureSection";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Shield, Smartphone, Database, Lock, Globe } from "lucide-react";

const DigitalBanking = () => {
  const bankingSolutions = [
    {
      title: "Issuing Solutions",
      description: "Manage the entire lifecycle of payment cards, including issuance, personalization, and management of credit, debit, prepaid, and virtual cards.",
      icon: <CreditCard className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Acquiring Solutions",
      description: "Support merchant acquiring services with transaction authorization, clearing, settlement, and comprehensive merchant management tools.",
      icon: <Database className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Digital Solutions",
      description: "Enhance the security of online transactions with 3D Secure authentication and other advanced digital payment technologies.",
      icon: <Shield className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Processing Services",
      description: "Gain operational flexibility and reduced overheads with our award-winning payments platform that adapts to evolving customer needs.",
      icon: <Database className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Payments Platform",
      description: "Deploy our token-based, cloud-native, and API-first platform to realize the true power of APIs and drive your payments business into the future.",
      icon: <Globe className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Pocket Bank",
      description: "Reduce time-to-market for launching a mobile banking app with our mobile-first banking solution that saves both time and money.",
      icon: <Smartphone className="h-6 w-6 text-isentric-600" />,
    },
  ];

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All transactions and sensitive data are protected with state-of-the-art encryption protocols.",
    },
    {
      title: "Multi-Factor Authentication",
      description: "Robust security measures ensure only authorized users can access accounts and perform transactions.",
    },
    {
      title: "Real-Time Fraud Detection",
      description: "Advanced algorithms continuously monitor transactions to identify and prevent suspicious activities.",
    },
    {
      title: "Compliance Standards",
      description: "Our solutions adhere to the highest regulatory standards including PCI-DSS, ISO 27001, and local regulations.",
    },
  ];

  return (
    <PageLayout 
      title="Digital Banking, Mobile Wallet & IB Solutions" 
      description="Comprehensive payment solutions designed to cater to various aspects of the financial services industry, from card issuance to merchant acquiring."
      heroBackground="bg-gradient-to-br from-isentric-900 to-blue-900"
    >
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="text-lg text-isentric-700 mb-6">
              We offer a comprehensive suite of payment solutions designed to cater to various aspects
              of the financial services industry. Our cutting-edge platforms enable financial institutions
              to freely differentiate, react quickly, and realize their vision in the payments industry.
            </p>
            <p className="text-lg text-isentric-700">
              From start-ups and industry disruptors to recognized innovators and market leaders,
              our visionary technology powers financial institutions of all sizes to deliver innovative,
              secure, and efficient payment services.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main Solutions */}
      <FeatureSection 
        title="Comprehensive Banking Solutions"
        description="Our suite of digital banking products covers every aspect of modern financial services"
        features={bankingSolutions}
        className="bg-isentric-50"
      />
      
      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-xl text-isentric-700 max-w-2xl mx-auto">
              Our solutions prioritize the highest standards of security and regulatory compliance
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="flex items-start">
                  <div className="bg-isentric-100 p-2 rounded-full mr-4">
                    <Lock className="h-5 w-5 text-isentric-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Banking Benefits */}
      <section className="py-20 bg-isentric-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Digital Banking Solutions</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Transform your financial institution with our comprehensive digital banking platform
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <Card className="bg-isentric-800 border-isentric-700 text-white h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Operational Efficiency</h3>
                  <Separator className="bg-isentric-700 mb-4" />
                  <p className="text-isentric-300">
                    Streamline processes, reduce manual operations, and lower costs through automated workflows
                    and optimized transaction processing.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="bg-isentric-800 border-isentric-700 text-white h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Enhanced Customer Experience</h3>
                  <Separator className="bg-isentric-700 mb-4" />
                  <p className="text-isentric-300">
                    Deliver seamless, personalized banking experiences across all channels, improving
                    customer satisfaction and loyalty.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Card className="bg-isentric-800 border-isentric-700 text-white h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Future-Proof Technology</h3>
                  <Separator className="bg-isentric-700 mb-4" />
                  <p className="text-isentric-300">
                    Stay ahead with cloud-native, API-first architecture that enables rapid innovation
                    and adaptation to changing market conditions.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <Card className="bg-isentric-800 border-isentric-700 text-white h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Real-Time Processing</h3>
                  <Separator className="bg-isentric-700 mb-4" />
                  <p className="text-isentric-300">
                    Enable instant payments, account updates, and real-time analytics for better
                    decision-making and customer service.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <Card className="bg-isentric-800 border-isentric-700 text-white h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
                  <Separator className="bg-isentric-700 mb-4" />
                  <p className="text-isentric-300">
                    Grow confidently with a platform designed to handle increasing transaction volumes
                    and expand to new markets seamlessly.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <Card className="bg-isentric-800 border-isentric-700 text-white h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Comprehensive Analytics</h3>
                  <Separator className="bg-isentric-700 mb-4" />
                  <p className="text-isentric-300">
                    Gain valuable insights from transaction data to optimize services, identify opportunities,
                    and enhance risk management.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DigitalBanking;
