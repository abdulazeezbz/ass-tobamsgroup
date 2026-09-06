import React from 'react';
import Button from './button';

interface ConsultationBannerProps {
  heading?: string;
  subheading?: string;
  mobileHeading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  bgClassName?: string;
}

const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  heading = 'Want to accelerate professional growth and development at your organisation?',
  subheading = 'See how we can help.',
  mobileHeading = "Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.",
  buttonText = 'Book a Consultation',
  onButtonClick,
  bgClassName = 'bg-primary',
}) => {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl">
        <div
          className={`${bgClassName} rounded-1xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-sm flex flex-col items-center justify-between gap-6 md:gap-6 text-center`}
        >
          {/* Mobile Text (16px) */}
          <p className="block md:hidden text-[16px] font-semibold font-nunito leading-relaxed text-center text-white px-2">
            {mobileHeading}
          </p>

          {/* Desktop Text */}
          <div className="hidden md:flex flex-col gap-1.5 text-center">
            <h2 className="text-xl lg:text-[22px] font-bold font-nunito leading-snug">
              {heading}
            </h2>
            {subheading && (
              <p className="text-white/90 text-base lg:text-lg font-medium">
                {subheading}
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <Button
              text={buttonText}
              onClick={onButtonClick}
              className="bg-white text-primary hover:bg-gray-100 font-bold h-[48px] px-8 rounded-md text-sm sm:text-base shadow-md w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
