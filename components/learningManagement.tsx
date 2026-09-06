import React from 'react'
import WebCard from "@/components/webCard"
import { Dot } from "lucide-react";


const LearningManagement = () => {
  return (
    <WebCard
      title="Learning Management System"
      titleColor="text-primary"
      sectionBg="bg-[#5712441A]"
      contentBg="bg-[#5712441A]"
      imageSrc="/images/learning-management-p.jpg"
      imageShape="circle"
      imagePosition="left"
      description="TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape."
      listHeading="Some of our courses include:"
      listHeadingColor="text-primary"
      listDirection="grid"
      listColumns={3}
      listIcon={<Dot size={26} className="text-primary fill-primary" />}
      listItems={[
        "Business Analysis",
        "Design Thinking",
        "Effective Communication",
        "Entrepreneurship",
        "Career Development",
        "Business Model",
      ]}
      ctaText="Learn More"
      ctaClassName="bg-primary text-white hover:bg-primary/90"
    />
  );
};

export default LearningManagement