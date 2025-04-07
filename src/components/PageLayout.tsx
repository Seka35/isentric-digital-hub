
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  heroBackground?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  description,
  ctaText = "Contact Us",
  ctaLink = "/contact",
  heroBackground = "bg-gradient-to-br from-isentric-dark via-isentric-navy to-isentric-deepblue",
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-isentric-dark">
      <Header />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-20 md:pt-40 md:pb-32 text-white ${heroBackground} border-b border-isentric-800/60`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-isentric-200 mb-8 max-w-3xl">
                {description}
              </p>
            )}
            <Button asChild className="rounded-xl shadow-lg shadow-isentric-accent/10">
              <Link to={ctaLink} className="flex items-center">
                {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Content */}
      <div className="bg-gradient-to-br from-isentric-dark to-isentric-darkblue flex-grow text-white">
        {children}
      </div>
      
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-isentric-darkblue to-isentric-dark text-white border-t border-isentric-800/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-isentric-200 bg-clip-text text-transparent">Ready to Transform Your Business?</h2>
              <p className="text-xl text-isentric-200 mb-8">
                Get in touch with our team to discover how iSentric can help you achieve your digital transformation goals.
              </p>
              <Button asChild size="lg" className="rounded-xl shadow-lg shadow-isentric-accent/10">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
