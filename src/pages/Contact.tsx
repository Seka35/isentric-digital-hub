import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-isentric-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-isentric-dark via-isentric-navy to-isentric-deepblue pt-32 pb-16 md:pt-40 md:pb-24 border-b border-isentric-800/60">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Contact Us
            </h1>
            <p className="text-xl text-isentric-200 max-w-2xl mx-auto text-center">
              Get in touch with our team of experts to discover how iSentric can transform your business
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-br from-isentric-dark to-isentric-darkblue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <Card className="flex flex-col items-center p-6 text-center h-full">
                <div className="bg-isentric-800/80 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-isentric-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-isentric-300">+123 456 7890</p>
                <p className="text-isentric-300">+123 456 7891</p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="flex flex-col items-center p-6 text-center h-full">
                <div className="bg-isentric-800/80 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-isentric-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-isentric-300">info@isentric.com</p>
                <p className="text-isentric-300">support@isentric.com</p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Card className="flex flex-col items-center p-6 text-center h-full">
                <div className="bg-isentric-800/80 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-isentric-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-isentric-300">123 Business Street</p>
                <p className="text-isentric-300">Kuala Lumpur, Malaysia</p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <Card className="flex flex-col items-center p-6 text-center h-full">
                <div className="bg-isentric-800/80 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-isentric-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-isentric-300">Monday - Friday: 9am - 6pm</p>
                <p className="text-isentric-300">Saturday & Sunday: Closed</p>
              </Card>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection delay={200}>
              <Card className="overflow-hidden h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.68725274092!2d101.61694288152807!3d3.138503812952892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1712492538974!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[600px]"
                ></iframe>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-isentric-200 mb-2">
                        Full Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="w-full" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-isentric-200 mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-isentric-200 mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="w-full" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-isentric-200 mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      className="w-full min-h-[150px]" 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-isentric-navy to-isentric-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-isentric-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">How quickly can you integrate your solutions?</h3>
                <p className="text-isentric-300">
                  Most of our solutions can be integrated within 2-4 weeks, depending on the complexity of your systems and requirements.
                </p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom solutions?</h3>
                <p className="text-isentric-300">
                  Yes, we specialize in creating tailored solutions that address your specific business needs and challenges.
                </p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">How secure are your payment solutions?</h3>
                <p className="text-isentric-300">
                  Our payment solutions adhere to the highest industry security standards, including PCI-DSS compliance and end-to-end encryption.
                </p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Do you provide ongoing support?</h3>
                <p className="text-isentric-300">
                  Absolutely! We offer comprehensive 24/7 support and maintenance services to ensure your systems are always running optimally.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-isentric-900 to-isentric-950 text-white border-t border-isentric-800/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-isentric-200 mb-8">
                Get in touch with our team today to discover how iSentric can help you achieve your digital transformation goals.
              </p>
              <Button size="lg" className="bg-isentric-accent hover:bg-isentric-accent/80 text-white px-8 py-6">
                Request a Demo
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
