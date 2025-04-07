
import React from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, Shield, CheckCircle, BarChart, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WhatsAppBusiness = () => {
  return (
    <PageLayout
      title="WhatsApp Business API"
      description="Expand Your Reach with WhatsApp Marketing. Leverage the power of the world's #1 messaging app to engage customers, enhance experiences, and drive business growth."
    >
      <section className="py-16 bg-gradient-to-br from-isentric-dark to-isentric-darkblue">
        <div className="container mx-auto px-4">
          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={100} className="text-center">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">2B+</div>
                  <p className="text-lg text-isentric-300">Global WhatsApp Users</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="text-center">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                  <p className="text-lg text-isentric-300">Message Open Rate</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="text-center">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">60%</div>
                  <p className="text-lg text-isentric-300">Higher Response Rate than Email</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key WhatsApp Business Features</h2>
            <p className="text-xl text-isentric-300 max-w-3xl mx-auto mb-12">
              Our comprehensive WhatsApp Business solution offers everything you need to engage customers effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardContent className="pt-8 px-6 pb-8 flex flex-col items-center">
                  <MessageCircle className="w-16 h-16 text-isentric-accent mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">Interactive Messaging</h3>
                  <p className="text-isentric-300 text-center">
                    Engage customers with rich, interactive messages including buttons, lists, and quick replies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardContent className="pt-8 px-6 pb-8 flex flex-col items-center">
                  <Shield className="w-16 h-16 text-isentric-accent mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">Official Business Profile</h3>
                  <p className="text-isentric-300 text-center">
                    Build trust with a verified business profile including your logo, contact details, and website.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardContent className="pt-8 px-6 pb-8 flex flex-col items-center">
                  <BarChart className="w-16 h-16 text-isentric-accent mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">Analytics & Reporting</h3>
                  <p className="text-isentric-300 text-center">
                    Track campaign performance, delivery status, and customer engagement metrics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="mb-16">
            <Card>
              <CardContent className="pt-8 px-6 pb-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <Smartphone className="w-16 h-16 text-isentric-accent mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Why Choose WhatsApp Business API?</h3>
                    <p className="text-isentric-300 mb-6">
                      Transform customer engagement with the platform's unmatched reach and high engagement rates.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">Reach over 2 billion users worldwide</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">98% open rate for messages</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">Rich media messaging capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">End-to-end encryption for security</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-isentric-300">Integration with existing systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-isentric-navy/40 rounded-xl p-6 border border-isentric-700/40">
                    <h4 className="text-xl font-semibold text-white mb-4">Get Started Today</h4>
                    <p className="text-isentric-300 mb-6">
                      Our team of WhatsApp Business API experts will help you set up and optimize your messaging strategy.
                    </p>
                    <div className="flex gap-4">
                      <Link to="/contact">
                        <Button>Contact Us</Button>
                      </Link>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhatsAppBusiness;
