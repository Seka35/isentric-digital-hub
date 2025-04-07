
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import AnimatedSection from "@/components/AnimatedSection";
import { Laptop, Users, DollarSign, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WebBroadcasting = () => {
  const webBroadcastingFeatures = [
    {
      title: "Quick and User-Friendly",
      description: "Send precise SMS messages through our web portal in just four simple steps, with no technical expertise required.",
      icon: <Laptop className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Flexible & Customizable",
      description: "Supports multilingual content, personalized templates, and variables like recipient names and order details.",
      icon: <Users className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Efficient, Cost-Effective",
      description: "Reach thousands instantly with a credit deduction system for cost control and transparent pricing.",
      icon: <DollarSign className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Reliable Delivery",
      description: "Automated retries ensure message completion and support for both Malaysian and international numbers.",
      icon: <CheckCircle className="h-6 w-6 text-isentric-600" />,
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Upload Your Contacts",
      description: "Import your contact list from a CSV file or select from existing customer segments.",
    },
    {
      number: 2,
      title: "Craft Your Message",
      description: "Use our editor to create personalized messages with variables and multilingual support.",
    },
    {
      number: 3,
      title: "Preview & Schedule",
      description: "Review your message, select delivery time, and confirm campaign details.",
    },
    {
      number: 4,
      title: "Send & Track Results",
      description: "Launch your campaign and monitor delivery rates, engagement, and performance.",
    },
  ];

  return (
    <PageLayout 
      title="Web-Based Broadcasting Portal" 
      description="Amplify Your Reach with iSentric's Web-based SMS Broadcast Portal. Easily connect with over 10,000 users, drive campaign promotions, share updates, or broadcast public messages—no coding required."
      heroBackground="bg-gradient-to-br from-isentric-800 to-isentric-950"
    >
      {/* Main Features */}
      <FeatureSection 
        title="Key Features"
        description="Our web-based broadcast portal makes SMS marketing accessible and effective"
        features={webBroadcastingFeatures}
        className="bg-white"
      />
      
      {/* How It Works */}
      <section className="py-20 bg-isentric-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-isentric-700 max-w-2xl mx-auto">
              Send SMS messages through our portal in just four simple steps
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <Card className="bg-white border border-gray-100 h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-isentric-600 flex items-center justify-center text-white text-xl font-bold mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-isentric-700 max-w-2xl mx-auto">
              Our web-based broadcasting solution is ideal for various business needs
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={100}>
              <div className="bg-isentric-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-3">Marketing Campaigns</h3>
                <p>Send promotional offers, discount codes, and special announcements to boost sales and engagement.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-isentric-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-3">Event Notifications</h3>
                <p>Keep attendees informed about upcoming events, schedule changes, and important updates.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-isentric-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-3">Service Alerts</h3>
                <p>Notify customers about service interruptions, maintenance schedules, or important account updates.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="bg-isentric-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-3">Internal Communications</h3>
                <p>Quickly reach employees with important announcements, emergency alerts, or schedule changes.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <div className="bg-isentric-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-3">Appointment Reminders</h3>
                <p>Reduce no-shows by sending automated appointment reminders with confirmation options.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="bg-isentric-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-3">Customer Feedback</h3>
                <p>Send survey links via SMS to gather valuable customer feedback and improve your services.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebBroadcasting;
