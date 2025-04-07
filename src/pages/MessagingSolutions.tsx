
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import { Link } from "react-router-dom";
import { MessageSquare, Bell, BarChart3, Users, Zap, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";

const MessagingSolutions = () => {
  return (
    <PageLayout
      title="Messaging Solutions"
      description="Engage customers with personalized messaging campaigns that drive results"
    >
      <section className="py-12 bg-gradient-to-br from-isentric-dark to-isentric-darkblue">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Instant & Direct Customer Connection</h2>
            <p className="text-lg text-isentric-200">
              Capture attention fast—over 90% of SMS messages are read within minutes! Elevate
              engagement and maximize ROI with personalized SMS and MMS campaigns, delivering
              promotions, updates, and exclusive offers straight to your customers.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={100}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <MessageSquare className="h-12 w-12 text-isentric-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Personalized Messaging That Drives Results</h3>
                  <p className="text-isentric-300">
                    Make every message count with tailor-made campaigns designed to resonate with your
                    audience. Strengthen brand loyalty by sending offers and updates that feel personal,
                    relevant, and timely.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Bell className="h-12 w-12 text-isentric-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Real-Time Notifications</h3>
                  <p className="text-isentric-300">
                    Keep customers informed at every step with automated transactional messages—whether
                    it's order confirmations, shipping alerts, or payment updates. Deliver instant peace of mind
                    with real-time SMS notifications.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <FeatureSection 
            title="Powerful SMS Marketing Features" 
            description="Our comprehensive messaging platform provides everything you need to create successful SMS campaigns"
            features={[
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Data-Driven Insights",
                description: "Gain a competitive edge with in-depth reports and analytics. Track key campaign metrics to refine your messaging strategy."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Precision Targeting",
                description: "Reach the right audience at the right time with smart segmentation based on customer data and behavior."
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Effortless Campaign Setup",
                description: "Launch your SMS marketing in minutes with our seamless setup. No technical expertise required."
              }
            ]}
          />
          
          <AnimatedSection delay={300} className="mt-12 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <Calendar className="h-16 w-16 text-isentric-400 mb-4" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-white mb-4">Flexible, Pay-as-You-Go SMS Credits</h3>
                    <p className="text-lg text-isentric-300 mb-6">
                      Enjoy complete control over your messaging with our hassle-free, pay-as-you-go model. Buy
                      SMS credits as needed—no contracts, no expiration, just flexibility.
                    </p>
                    <ul className="space-y-2 text-isentric-300 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>No monthly commitments or hidden fees</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>Volume discounts for larger credit purchases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-isentric-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>Credits that never expire</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Boost Your Customer Engagement?</h3>
            <p className="text-lg text-isentric-300 mb-8 max-w-2xl mx-auto">
              Start connecting with your customers through powerful SMS campaigns today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">
                Get Started
              </Button>
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

export default MessagingSolutions;
