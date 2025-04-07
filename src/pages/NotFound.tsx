
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-isentric-50 py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-isentric-900 mb-6">404</h1>
          <p className="text-xl md:text-2xl text-isentric-700 mb-8">
            Oops! The page you're looking for doesn't exist
          </p>
          <Button asChild size="lg" className="bg-isentric-600 hover:bg-isentric-700">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
