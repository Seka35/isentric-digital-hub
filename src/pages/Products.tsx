
import React from "react";
import PageLayout from "@/components/PageLayout";
import { MessageSquare, Bot, Wallet, Shield, CreditCard, Phone } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const productsList = [
    {
      icon: <MessageSquare className="h-8 w-8 text-isentric-accent" />,
      title: "WhatsApp Business API",
      description: "Engage your customers with rich, personalized conversations on the world's most popular messaging app.",
      linkTo: "/products/whatsapp-business"
    },
    {
      icon: <Bot className="h-8 w-8 text-isentric-accent" />,
      title: "Robolab Chatbot",
      description: "Our AI-powered chatbot solution that provides instant customer service and support around the clock.",
      linkTo: "/products/robolab-chatbot"
    },
    {
      icon: <Wallet className="h-8 w-8 text-isentric-accent" />,
      title: "BNPL Solution",
      description: "Offer flexible 'Buy Now, Pay Later' payment options to increase conversion rates and average order value.",
      linkTo: "/products/bnpl-solution"
    },
    {
      icon: <Shield className="h-8 w-8 text-isentric-accent" />,
      title: "Fraud Prevention",
      description: "Advanced security system that protects your business and customers from fraudulent activities.",
      linkTo: "/products/fraud-prevention"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-isentric-accent" />,
      title: "Cybersecurity",
      description: "Comprehensive protection against digital threats with our advanced cybersecurity solutions.",
      linkTo: "/products/cybersecurity"
    },
    {
      icon: <Phone className="h-8 w-8 text-isentric-accent" />,
      title: "Two-Way SMS",
      description: "Enable real-time, two-way communication with your customers through text messaging.",
      linkTo: "/products/two-way-sms"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-isentric-accent" />,
      title: "Intent-Based Chatbot",
      description: "Smart chatbot technology that understands user intent to provide more accurate responses.",
      linkTo: "/products/intent-based-chatbot"
    },
    {
      icon: <Bot className="h-8 w-8 text-isentric-accent" />,
      title: "LLM Chatbot",
      description: "Advanced language model chatbot for natural, human-like conversations and customer interactions.",
      linkTo: "/products/llm-chatbot"
    },
  ];

  return (
    <PageLayout
      title="Our Products"
      description="Discover our comprehensive suite of digital solutions designed to drive business growth and innovation."
      ctaText="Request a Demo"
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Complete Digital Transformation Suite</h2>
            <p className="text-xl text-isentric-300">
              From communication tools to financial technology, our products are built to help businesses thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {productsList.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                linkTo={product.linkTo}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
