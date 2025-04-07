
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  linkText?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  icon,
  title,
  description,
  linkTo,
  linkText = "Learn More"
}) => {
  return (
    <div className="product-card group overflow-hidden">
      <div className="p-6 flex flex-col h-full">
        <div className="card-icon mb-6 w-fit">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        
        <p className="text-isentric-300 mb-6 flex-grow">
          {description}
        </p>
        
        <Button 
          asChild 
          variant="secondary"
          className="mt-4 w-full justify-center group-hover:bg-gradient-to-r group-hover:from-isentric-accent group-hover:to-isentric-accent/90 transition-all duration-500"
        >
          <Link to={linkTo}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
