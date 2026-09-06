import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './button';

const TrainingConsultant = () => {
  const features = [
    {
      title: "Expert-Led Learning",
      description:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Global Recognition",
      description:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <section className="w-full py-10 md:py-16 bg-primary/10">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-nunito text-primary">
            Training The Consultant
          </h2>
          <h3 className="text-sm sm:text-base font-semibold text-primary">
            Maximise Your Potential as a Certified Trainer:
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2 max-w-5xl">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified training
            consultant. Learn from professionals in the field, immerse yourself in
            a thorough curriculum, and hone your training methods through
            interactive workshops. Participating in our program will enable you to
            gain expertise in diverse courses while also developing the abilities
            to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Feature Grid Box */}
        <div className="bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-sm mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h4 className="font-bold text-base sm:text-lg text-white">
                  {feature.title}
                </h4>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Button
            text="Learn More"
            rightIcon={<ArrowUpRight size={18} />}
            className="bg-primary text-white h-[45px] px-6 rounded-md font-semibold text-sm hover:bg-primary/90 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default TrainingConsultant;
