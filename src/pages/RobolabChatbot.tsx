
import React from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Clock, DollarSign, Settings, CheckSquare, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RobolabChatbot = () => {
  const chatbotFeatures = [
    {
      title: "Instant Response, Zero Delays",
      description: "Reduce wait times and handle high volumes of inquiries seamlessly with AI-powered automation.",
      icon: <Clock className="h-6 w-6 text-isentric-400" />,
    },
    {
      title: "Human-Like Conversations with AI",
      description: "Powered by advanced LLM technology, our chatbot provides accurate, context-aware responses—eliminating robotic or irrelevant replies.",
      icon: <Bot className="h-6 w-6 text-isentric-400" />,
    },
    {
      title: "No-Code Chatbot Builder",
      description: "Empower your team with an easy-to-use, no-code chatbot that requires no technical expertise to set up and manage.",
      icon: <Settings className="h-6 w-6 text-isentric-400" />,
    },
    {
      title: "Cost-Effective & Scalable",
      description: "Automate responses to cut operational costs while efficiently scaling with your growing customer base.",
      icon: <DollarSign className="h-6 w-6 text-isentric-400" />,
    },
  ];

  const subcategories = [
    {
      title: "Intent-Based Chatbot",
      description: "Smart, intent-driven technology that seamlessly automates workflows with pre-defined procedures, ensuring efficiency and accuracy in every conversation.",
      link: "/products/intent-based-chatbot",
    },
    {
      title: "LLM-Powered Chatbot",
      description: "Advanced AI chatbot for smarter, context-aware conversations that handles complex interactions, delivers accurate responses, and maintains brand consistency.",
      link: "/products/llm-chatbot",
    },
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Handle common inquiries, troubleshooting, and support tickets automatically, freeing up human agents for complex issues."
    },
    {
      title: "Lead Generation",
      description: "Engage website visitors, qualify leads, and book appointments or demos automatically."
    },
    {
      title: "Product Recommendations",
      description: "Guide customers through personalized product recommendations based on their preferences and needs."
    },
    {
      title: "Order Processing",
      description: "Enable customers to place orders, check order status, and manage returns through conversational interface."
    },
  ];

  return (
    <PageLayout 
      title="Robolab Chatbot" 
      description="Revolutionize Customer Support with AI-Powered Automation. Streamline Customer Interactions & Scale Support Seamlessly."
      heroBackground="bg-gradient-to-br from-isentric-navy to-isentric-dark"
    >
      {/* Introduction */}
      <section className="py-16 bg-isentric-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="text-lg text-isentric-300 mb-6">
              Enhance your customer service experience with iSentric Robolabs, an AI-driven chatbot designed for smarter, faster, and more natural conversations. Our solution delivers 24/7 customer support effortlessly, ensuring customers always get the help they need while reducing workload for your team.
            </p>
            <p className="text-lg text-isentric-300">
              Whether you're a startup or enterprise, iSentric Robolabs adapts to your unique business needs, offering flexible and scalable AI chatbot solutions that transform your customer service.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main Features */}
      <FeatureSection 
        title="Key Features"
        description="Our AI-powered chatbot provides comprehensive features for exceptional customer service"
        features={chatbotFeatures}
        className="bg-isentric-darkblue"
      />
      
      {/* Use Cases */}
      <section className="py-20 bg-isentric-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Use Cases</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Discover how Robolab chatbots can transform your business operations
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <Card className="h-full bg-isentric-800 border-isentric-700/40">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-isentric-900 p-2 rounded-full mr-4">
                        <CheckSquare className="h-5 w-5 text-isentric-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">{useCase.title}</h3>
                        <p className="text-isentric-300">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bot Types */}
      <section className="py-20 bg-isentric-navy text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Types</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Choose the right AI chatbot solution for your business needs
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {subcategories.map((category, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="bg-isentric-800 p-8 rounded-lg border border-isentric-700 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="bg-isentric-700/50 p-3 rounded-md inline-block mb-4">
                      {index === 0 ? 
                        <Settings className="h-8 w-8 text-isentric-300" /> : 
                        <BrainCircuit className="h-8 w-8 text-isentric-300" />
                      }
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                    <p className="text-isentric-300 mb-6">{category.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="border-isentric-300 text-white hover:bg-isentric-700">
                      <Link to={category.link}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-isentric-darkblue">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Business Benefits</h2>
            <p className="text-xl text-isentric-300 max-w-2xl mx-auto">
              Transform your customer service operations with Robolab AI chatbots
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center p-6">
                <div className="bg-isentric-800 p-4 rounded-full shadow-md mx-auto mb-4 w-16 h-16 flex items-center justify-center border border-isentric-700/40">
                  <DollarSign className="h-8 w-8 text-isentric-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Reduce Costs</h3>
                <p className="text-isentric-300">Lower support costs by up to 30% by automating routine inquiries</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="text-center p-6">
                <div className="bg-isentric-800 p-4 rounded-full shadow-md mx-auto mb-4 w-16 h-16 flex items-center justify-center border border-isentric-700/40">
                  <Clock className="h-8 w-8 text-isentric-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">24/7 Availability</h3>
                <p className="text-isentric-300">Provide instant support any time, improving customer satisfaction</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="text-center p-6">
                <div className="bg-isentric-800 p-4 rounded-full shadow-md mx-auto mb-4 w-16 h-16 flex items-center justify-center border border-isentric-700/40">
                  <BrainCircuit className="h-8 w-8 text-isentric-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Continuous Learning</h3>
                <p className="text-isentric-300">AI constantly improves based on interactions, getting smarter over time</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RobolabChatbot;
