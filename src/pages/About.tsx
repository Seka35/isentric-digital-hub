import React from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, CreditCard, Shield, Smartphone, Bot } from "lucide-react";

const About = () => {
  return (
    <PageLayout 
      title="About iSentric" 
      description="Empowering businesses through cutting-edge financial technology and real-time communication solutions."
    >
      {/* Company Introduction */}
      <section className="py-20 bg-isentric-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">Company Introduction</h2>
              <div className="prose prose-lg max-w-none text-isentric-200">
                <p className="mb-6 text-lg">
                  We provide cutting-edge financial technology and real-time communication solutions,
                  empowering businesses with secure, scalable, and seamless digital transformation. Our
                  comprehensive suite of services bridges the gap between payment innovation and customer
                  engagement, ensuring businesses stay ahead in an ever-evolving digital landscape.
                </p>
                <p className="mb-6 text-lg">
                  Our advanced financial technology solutions include secure payment processing, card
                  management, fraud prevention, and omni-channel banking. Designed for reliability and
                  flexibility, our platforms support seamless transactions, enhancing customer trust and
                  operational efficiency for banks, fintech companies, and financial institutions.
                </p>
                <p className="mb-6 text-lg">
                  Complementing this, our real-time communication solutions enhance customer interactions
                  through SMS broadcasting, Omni-Channel Chat platforms, WhatsApp Business API,
                  Electronic Direct Mail (EDM), and AI-powered chatbots. These tools enable businesses to
                  connect with their audience efficiently, driving engagement and loyalty.
                </p>
                <p className="text-lg">
                  By integrating secure payment processing with intelligent communication platforms, we
                  offer a complete digital ecosystem that optimizes operations, enhances customer
                  experiences, and drives business growth. Partner with us to transform the way you connect
                  and transact in the digital era.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl border border-isentric-700/40">
                <img 
                  src="/about.png" 
                  alt="About iSentric" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gradient-to-br from-isentric-darkblue to-isentric-navy">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">Our Core Solutions</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Our integrated suite of products and services empower businesses to thrive in the digital economy
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-in-left" delay={100}>
              <div className="bg-gradient-to-br from-isentric-dark to-isentric-darkblue p-8 rounded-xl shadow-lg border border-isentric-700/50 h-full">
                <h3 className="text-2xl font-bold mb-4 text-white">Financial Technology Solutions</h3>
                <Separator className="mb-6" />
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-isentric-navy p-2 rounded-lg shadow-md mr-4 border border-isentric-700/40">
                      <CreditCard className="h-6 w-6 text-isentric-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Secure Payment Processing</h4>
                      <p className="text-isentric-300">End-to-end encrypted transaction processing with fraud prevention</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-isentric-navy p-2 rounded-lg shadow-md mr-4 border border-isentric-700/40">
                      <Shield className="h-6 w-6 text-isentric-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Fraud Prevention</h4>
                      <p className="text-isentric-300">Advanced security to protect transactions and sensitive data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-isentric-navy p-2 rounded-lg shadow-md mr-4 border border-isentric-700/40">
                      <Smartphone className="h-6 w-6 text-isentric-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Omni-channel Banking</h4>
                      <p className="text-isentric-300">Seamless digital banking experiences across all devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="bg-gradient-to-br from-isentric-dark to-isentric-darkblue p-8 rounded-xl shadow-lg border border-isentric-700/50 h-full">
                <h3 className="text-2xl font-bold mb-4 text-white">Communication Solutions</h3>
                <Separator className="mb-6" />
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-isentric-navy p-2 rounded-lg shadow-md mr-4 border border-isentric-700/40">
                      <MessageSquare className="h-6 w-6 text-isentric-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">SMS Broadcasting</h4>
                      <p className="text-isentric-300">Reach customers instantly with targeted messaging campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-isentric-navy p-2 rounded-lg shadow-md mr-4 border border-isentric-700/40">
                      <Bot className="h-6 w-6 text-isentric-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">AI-powered Chatbots</h4>
                      <p className="text-isentric-300">Intelligent conversational agents for 24/7 customer support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-isentric-navy p-2 rounded-lg shadow-md mr-4 border border-isentric-700/40">
                      <MessageSquare className="h-6 w-6 text-isentric-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">WhatsApp Business API</h4>
                      <p className="text-isentric-300">Engage customers on their preferred messaging platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-isentric-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">Our Values</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-gradient-to-br from-isentric-darkblue to-isentric-navy p-8 rounded-xl text-center border border-isentric-700/50 shadow-md">
                <h3 className="text-2xl font-bold mb-3 text-white">Innovation</h3>
                <p className="text-isentric-300">We constantly push the boundaries of what's possible, developing cutting-edge solutions that help our clients stay ahead.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-isentric-darkblue to-isentric-navy p-8 rounded-xl text-center border border-isentric-700/50 shadow-md">
                <h3 className="text-2xl font-bold mb-3 text-white">Security</h3>
                <p className="text-isentric-300">We prioritize the protection of our clients' data and transactions, implementing robust security measures across all our solutions.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-gradient-to-br from-isentric-darkblue to-isentric-navy p-8 rounded-xl text-center border border-isentric-700/50 shadow-md">
                <h3 className="text-2xl font-bold mb-3 text-white">Customer Focus</h3>
                <p className="text-isentric-300">We put our clients first, designing intuitive solutions that address their unique challenges and help them achieve their goals.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
