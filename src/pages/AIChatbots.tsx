
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import { Link } from "react-router-dom";
import { Bot, Clock, Users, Zap, Globe, Shield, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIChatbots = () => {
  return (
    <PageLayout
      title="AI Chatbots"
      description="Intelligent conversational agents for 24/7 customer service and engagement"
    >
      <section className="py-12 bg-isentric-darkblue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Revolutionize Customer Support with AI-Powered Automation</h2>
            <p className="text-lg text-isentric-300">
              Enhance your customer service experience with iSentric AI Chatbots, designed for smarter, 
              faster, and more natural conversations that drive engagement and satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-isentric-800 p-6 rounded-lg border border-isentric-700/40 flex flex-col h-full">
              <Bot className="h-12 w-12 text-isentric-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Robolab Chatbot</h3>
              <p className="text-isentric-300 mb-4 flex-grow">
                AI-powered conversational agents that provide 24/7 customer service with instant responses and zero delays.
              </p>
              <Link to="/products/robolab-chatbot">
                <Button className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="bg-isentric-800 p-6 rounded-lg border border-isentric-700/40 flex flex-col h-full">
              <Workflow className="h-12 w-12 text-isentric-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Intent-Based Chatbot</h3>
              <p className="text-isentric-300 mb-4 flex-grow">
                Streamline customer interactions with smart, intent-driven technology that automatically selects the right workflow.
              </p>
              <Link to="/products/intent-based-chatbot">
                <Button className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="bg-isentric-800 p-6 rounded-lg border border-isentric-700/40 flex flex-col h-full">
              <Globe className="h-12 w-12 text-isentric-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">LLM Chatbot</h3>
              <p className="text-isentric-300 mb-4 flex-grow">
                Context-aware conversations powered by advanced AI technology for multilingual support and complex inquiries.
              </p>
              <Link to="/products/llm-chatbot">
                <Button className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <FeatureSection 
            title="Benefits of AI Chatbots" 
            description="Transform your customer service and drive business growth with intelligent automation"
            features={[
              {
                icon: <Clock className="h-10 w-10" />,
                title: "24/7 Customer Support",
                description: "Provide round-the-clock assistance to customers, answering questions instantly at any time."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Improved Customer Experience",
                description: "Deliver consistent, personalized interactions that enhance satisfaction and loyalty."
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Increased Efficiency",
                description: "Automate routine inquiries and free up human agents to focus on complex issues."
              }
            ]}
          />
          
          <div className="bg-isentric-900 text-white rounded-lg p-8 mt-16">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-6 lg:mb-0 lg:pr-12">
                <h3 className="text-2xl font-bold mb-4">Why Choose iSentric AI Chatbots?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-isentric-300 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-isentric-200">Human-like conversations with advanced language models</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-isentric-300 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-isentric-200">No-code chatbot builders for easy setup and management</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-isentric-300 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-isentric-200">Seamless integration with your existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-isentric-300 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-isentric-200">Cost-effective solution that scales with your business</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <Bot className="h-32 w-32 text-isentric-300" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Customer Experience?</h3>
            <p className="text-lg text-isentric-300 mb-8 max-w-2xl mx-auto">
              Deploy intelligent chatbots that engage customers, answer questions, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button>
                  Request a Demo
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline">
                  Explore All AI Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIChatbots;
