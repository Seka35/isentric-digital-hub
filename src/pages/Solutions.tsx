
import React from "react";
import PageLayout from "@/components/PageLayout";
import { MessageSquare, Bot, Wallet, CreditCard, Phone, BarChart, Shield } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const Solutions = () => {
  const solutionsList = [
    {
      icon: <MessageSquare className="h-8 w-8 text-isentric-accent" />,
      title: "Messaging Solutions",
      description: "Engage customers with personalized messaging campaigns that drive results and conversions.",
      linkTo: "/solutions/messaging-solutions"
    },
    {
      icon: <Bot className="h-8 w-8 text-isentric-accent" />,
      title: "AI Chatbots",
      description: "Intelligent conversational agents that provide 24/7 customer support and service.",
      linkTo: "/solutions/ai-chatbots"
    },
    {
      icon: <Phone className="h-8 w-8 text-isentric-accent" />,
      title: "Call Center Tools",
      description: "Comprehensive tools to optimize your call center operations and improve customer experience.",
      linkTo: "/solutions/call-center-tools"
    },
    {
      icon: <Wallet className="h-8 w-8 text-isentric-accent" />,
      title: "Digital Wallets",
      description: "Secure digital payment solutions that simplify transactions for your customers.",
      linkTo: "/solutions/digital-wallets"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-isentric-accent" />,
      title: "Payment Processing",
      description: "Fast, secure payment processing solutions for e-commerce and physical retail.",
      linkTo: "/solutions/payment-processing"
    },
    {
      icon: <Shield className="h-8 w-8 text-isentric-accent" />,
      title: "Fraud Prevention",
      description: "Advanced security systems to protect your business from fraud and cyber threats.",
      linkTo: "/solutions/fraud-prevention"
    },
    {
      icon: <BarChart className="h-8 w-8 text-isentric-accent" />,
      title: "Digital Banking",
      description: "Comprehensive digital banking solutions for financial institutions and their customers.",
      linkTo: "/solutions/digital-banking"
    },
    {
      icon: <Shield className="h-8 w-8 text-isentric-accent" />,
      title: "Blockchain Services",
      description: "Cutting-edge blockchain solutions for secure, transparent business operations.",
      linkTo: "/solutions/blockchain-services"
    }
  ];

  return (
    <PageLayout
      title="Our Solutions"
      description="Comprehensive business solutions designed to meet your specific industry needs and challenges."
      ctaText="Explore Our Solutions"
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Solutions</h2>
            <p className="text-xl text-isentric-300">
              Our solutions are built to address the unique challenges of modern businesses, enhancing efficiency and driving growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {solutionsList.map((solution, index) => (
              <ProductCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                linkTo={solution.linkTo}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Solutions;
