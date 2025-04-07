
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, BarChart, UserCheck, CreditCard, ArrowRight } from "lucide-react";

const SMSSolutions = () => {
  const smsFeatures = [
    {
      title: "Instant & Direct Customer Connection",
      description: "Capture attention fast—over 90% of SMS messages are read within minutes! Elevate engagement and maximize ROI with personalized SMS and MMS campaigns.",
      icon: <MessageSquare className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Personalized Messaging That Drives Results",
      description: "Make every message count with tailor-made campaigns designed to resonate with your audience. Strengthen brand loyalty with personal, relevant offers.",
      icon: <UserCheck className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Real-Time Notifications for a Seamless Experience",
      description: "Keep customers informed at every step with automated transactional messages—whether it's order confirmations, shipping alerts, or payment updates.",
      icon: <MessageSquare className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Flexible, Pay-as-You-Go SMS Credits",
      description: "Enjoy complete control over your messaging with our hassle-free, pay-as-you-go model. Buy SMS credits as needed—no contracts, no expiration, just flexibility.",
      icon: <CreditCard className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Effortless SMS Campaign Setup",
      description: "Launch your SMS marketing in minutes with our seamless setup. Whether it's a one-time blast or an ongoing campaign, start engaging your audience with just one click.",
      icon: <MessageSquare className="h-6 w-6 text-isentric-600" />,
    },
    {
      title: "Data-Driven Insights to Optimize Performance",
      description: "Gain a competitive edge with in-depth reports and analytics. Track key campaign metrics like delivery rates, engagement, and conversions to refine your messaging strategy.",
      icon: <BarChart className="h-6 w-6 text-isentric-600" />,
    },
  ];

  const subcategories = [
    {
      title: "Web-Based Broadcasting Portal",
      description: "Easily connect with over 10,000 users, drive campaign promotions, and share updates with no coding required.",
      link: "/products/web-broadcasting",
    },
    {
      title: "Bulk Broadcasting API",
      description: "Streamline digital commerce with our API for OTPs, authentication, delivery updates, and follow-up notifications.",
      link: "/products/bulk-broadcasting-api",
    },
    {
      title: "Managed Service Broadcasting",
      description: "Simply provide your email content and customer contacts—our team will handle the rest for maximum engagement.",
      link: "/products/managed-service",
    },
    {
      title: "2-Way SMS",
      description: "Unlock new business opportunities with real-time, two-way communication for interactive marketing and customer engagement.",
      link: "/products/two-way-sms",
    },
  ];

  return (
    <PageLayout 
      title="SMS Solutions" 
      description="Capture attention fast—over 90% of SMS messages are read within minutes. Elevate engagement and maximize ROI with our SMS solutions."
      heroBackground="bg-gradient-to-br from-isentric-800 to-isentric-900"
    >
      {/* Main Features */}
      <FeatureSection 
        title="Key Features"
        description="Our comprehensive SMS solution offers everything you need to engage customers effectively"
        features={smsFeatures}
        className="bg-white"
      />
      
      {/* Statistics Section */}
      <section className="py-20 bg-isentric-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SMS Continues to Drive Results</h2>
            <p className="text-xl text-isentric-700 max-w-2xl mx-auto">
              In today's digital landscape, SMS remains one of the most effective communication channels
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
                <h3 className="text-5xl font-bold text-isentric-600 mb-2">90%</h3>
                <p className="text-isentric-700">of SMS messages are read within 3 minutes</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
                <h3 className="text-5xl font-bold text-isentric-600 mb-2">133.6%</h3>
                <p className="text-isentric-700">mobile penetration rate in Malaysia</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
                <h3 className="text-5xl font-bold text-isentric-600 mb-2">974.6M</h3>
                <p className="text-isentric-700">SMS messages sent in Q1 2020 in Malaysia alone</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* SMS Subcategories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SMS Solution Categories</h2>
            <p className="text-xl text-isentric-700 max-w-2xl mx-auto">
              Choose the right SMS solution that fits your business needs
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subcategories.map((category, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="bg-isentric-50 p-8 rounded-lg border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-isentric-900">{category.title}</h3>
                    <p className="text-isentric-600 mb-6">{category.description}</p>
                  </div>
                  <Button asChild variant="outline" className="w-fit">
                    <Link to={category.link}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SMSSolutions;
