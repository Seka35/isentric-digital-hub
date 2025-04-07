
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title,
  description = "We're working on bringing you detailed information about this product. Check back soon for updates."
}) => {
  return (
    <PageLayout
      title={title}
      description={description}
    >
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Coming Soon" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-6">Page Under Construction</h2>
          <p className="text-isentric-600 mb-8">
            We're currently building this page with detailed information about {title}.
            Please check back soon or contact us for more information.
          </p>
          <Button asChild className="bg-isentric-600 hover:bg-isentric-700">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default ComingSoon;
