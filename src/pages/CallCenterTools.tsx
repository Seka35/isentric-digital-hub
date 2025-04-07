
import React from "react";
import PageLayout from "@/components/PageLayout";
import FeatureSection from "@/components/FeatureSection";
import { Link } from "react-router-dom";
import { Headphones, Video, BarChart3, Phone, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallCenterTools = () => {
  return (
    <PageLayout
      title="Call Center Tools"
      description="Transform customer communications with advanced call center solutions"
    >
      <section className="py-12 bg-isentric-darkblue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Transform Customer Communication with ISentric Call</h2>
            <p className="text-lg text-isentric-300">
              Empower your business with cutting-edge communication solutions that enable customers to connect with you
              effortlessly via phone, voice, and video calls—anytime, anywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-isentric-800 p-8 rounded-lg border border-isentric-700/40">
              <Phone className="h-12 w-12 text-isentric-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud PBX Telephone – Quick & Hassle-Free Setup</h3>
              <p className="text-isentric-300 mb-4">
                Turn any browser into a customer support hub without expensive hardware. With ISentric Call,
                your agents can receive and make calls instantly using just the internet.
              </p>
              <ul className="space-y-2 text-isentric-300">
                <li className="flex items-start">
                  <span className="text-isentric-accent mr-2">✓</span>
                  <span>No additional devices needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-isentric-accent mr-2">✓</span>
                  <span>Browser-based call management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-isentric-accent mr-2">✓</span>
                  <span>Fast and easy deployment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-isentric-800 p-8 rounded-lg border border-isentric-700/40">
              <Video className="h-12 w-12 text-isentric-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">VoIP – Engage Customers with Voice & Video Calls</h3>
              <p className="text-isentric-300 mb-4">
                Take customer interactions to the next level by offering real-time voice and video calls.
                Conduct virtual product demos, live consultations, and interactive support sessions effortlessly.
              </p>
              <ul className="space-y-2 text-isentric-300">
                <li className="flex items-start">
                  <span className="text-isentric-accent mr-2">✓</span>
                  <span>High-quality voice and video</span>
                </li>
                <li className="flex items-start">
                  <span className="text-isentric-accent mr-2">✓</span>
                  <span>Interactive customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-isentric-accent mr-2">✓</span>
                  <span>Virtual consultations and demos</span>
                </li>
              </ul>
            </div>
          </div>
          
          <FeatureSection 
            title="Powerful Features to Elevate Your Business Communication" 
            description="Enhanced call center capabilities for exceptional customer experiences"
            features={[
              {
                icon: <Headphones className="h-10 w-10" />,
                title: "Call Recording & Playback",
                description: "Easily save and download voice or video calls for future reference, training, or quality assessment."
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Data-Driven Call Center Analytics",
                description: "Monitor and optimize your business performance with an insightful analytics dashboard to enhance service quality."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Team Productivity Management",
                description: "Efficiently manage and supervise agents while ensuring transparent role distribution across teams."
              }
            ]}
          />
          
          <div className="bg-isentric-900 text-white rounded-lg p-8 mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Unify Communication with ISentric Omnichannel Chat</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-isentric-800 p-4 rounded-md text-center">
                <Headphones className="h-12 w-12 mx-auto mb-3 text-isentric-300" />
                <h4 className="font-semibold mb-2">Voice & Video</h4>
                <p className="text-sm text-isentric-300">High-quality calls directly from your browser</p>
              </div>
              <div className="bg-isentric-800 p-4 rounded-md text-center">
                <Layers className="h-12 w-12 mx-auto mb-3 text-isentric-300" />
                <h4 className="font-semibold mb-2">Omnichannel</h4>
                <p className="text-sm text-isentric-300">20+ channels in one unified dashboard</p>
              </div>
              <div className="bg-isentric-800 p-4 rounded-md text-center">
                <Users className="h-12 w-12 mx-auto mb-3 text-isentric-300" />
                <h4 className="font-semibold mb-2">Team Management</h4>
                <p className="text-sm text-isentric-300">Efficient agent supervision and roles</p>
              </div>
              <div className="bg-isentric-800 p-4 rounded-md text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-3 text-isentric-300" />
                <h4 className="font-semibold mb-2">Analytics</h4>
                <p className="text-sm text-isentric-300">Comprehensive performance insights</p>
              </div>
            </div>
          </div>
          
          <div className="bg-isentric-800 p-8 rounded-lg border border-isentric-700/40 mt-16 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <Layers className="h-20 w-20 text-isentric-300" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-4">One Dashboard for All Communication</h3>
                <p className="text-lg text-isentric-300 mb-6">
                  Streamline customer interactions by activating voice or video calls alongside other communication
                  channels in a single, intuitive interface. Integrate with WhatsApp, Instagram, email, and over 20 other channels.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="bg-isentric-900 p-2 rounded text-center text-sm text-isentric-300">WhatsApp</div>
                  <div className="bg-isentric-900 p-2 rounded text-center text-sm text-isentric-300">Instagram</div>
                  <div className="bg-isentric-900 p-2 rounded text-center text-sm text-isentric-300">Email</div>
                  <div className="bg-isentric-900 p-2 rounded text-center text-sm text-isentric-300">Facebook</div>
                  <div className="bg-isentric-900 p-2 rounded text-center text-sm text-isentric-300">SMS</div>
                  <div className="bg-isentric-900 p-2 rounded text-center text-sm text-isentric-300">Live Chat</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Elevate Your Customer Experience?</h3>
            <p className="text-lg text-isentric-300 mb-8 max-w-2xl mx-auto">
              Transform your customer communication with our advanced call center solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products/call-centre-solutions">
                <Button>
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CallCenterTools;
