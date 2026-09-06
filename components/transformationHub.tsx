import React from 'react';
import WebCard from '@/components/webCard';
import { Zap } from 'lucide-react';

const TransformationHub = () => {
  return (
    <WebCard
      headerPosition="top"
      tagText="Learning With Our CEO:"
      tagColor="text-[#0055FF]"
      title="Transformation Hub With Jite Newton"
      titleColor="text-primary"
      cardBg="bg-secondary/20"
      contentBg="bg-[#FFFFFF4D]"
      imageSrc="/images/representation-user-experience-interface-design.jpg"
      imageShape="rounded-2xl"
      imagePosition="left"
      description="Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours."
      listDirection="grid"
      listColumns={2}
      listIcon={<Zap size={16} className="text-primary" />}
      listItemBg="bg-white"
      listItemTextColor="text-gray-800"
      listItems={[
        "Strategic Career Guidance",
        "Leadership Development",
        "CV Development",
        "Sustainability Leadership",
        "Communication Skills",
        "Business Model",
      ]}
      ctaText="Learn More"
      ctaClassName="bg-primary text-white hover:bg-primary/90"
    />
  );
};

export default TransformationHub;
