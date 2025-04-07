
import React from "react";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureSectionProps {
  title?: string;
  description?: string;
  features: FeatureItem[];
  className?: string;
  isCheckList?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  className = "",
  isCheckList = false,
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <AnimatedSection className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>}
            {description && <p className="text-xl text-isentric-300 max-w-3xl mx-auto">{description}</p>}
          </AnimatedSection>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={100 * index}>
              <div className="p-6 bg-isentric-800 rounded-lg shadow-md h-full border border-isentric-700/40">
                {isCheckList ? (
                  <div className="flex items-start">
                    <div className="bg-isentric-900 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-isentric-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-white">{feature.title}</h3>
                      <p className="text-isentric-300">{feature.description}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {feature.icon && (
                      <div className="bg-isentric-900 p-3 rounded-lg inline-block mb-4">
                        {feature.icon}
                      </div>
                    )}
                    <h3 className="font-semibold text-xl mb-2 text-white">{feature.title}</h3>
                    <p className="text-isentric-300">{feature.description}</p>
                  </>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
