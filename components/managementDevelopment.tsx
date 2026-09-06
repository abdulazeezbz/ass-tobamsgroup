import React from 'react';
import WebCard from '@/components/webCard';
import { Zap } from 'lucide-react';

const ManagementDevelopment = () => {
  return (
    <WebCard
      title="Management Development Program"
      titleColor="text-white"
      mobileTitleSize="text-[16px]"
      cardBg="bg-[#2C0922]"
      descriptionColor="text-white/90"
      imageSrc="/images/management-development.jpg"
      imageShape="rounded-md rounded-br-[0px]"
      imagePosition="left"
      description={
        <div className="space-y-4">
          <p>
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high-performing
            leaders they need to thrive.
          </p>
          <p>
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>
        </div>
      }
      listDirection="vertical"
      listIcon={<Zap size={16} className="text-white fill-white" />}
      listItemBg="bg-[#8F6182]"
      listItemTextColor="text-white"
      listItems={[
        "Enhanced Leadership Skills",
        "Improved Employee Engagement",
        "Stronger Organisational Culture",
        "Sustainable Growth",
      ]}
    />
  );
};

export default ManagementDevelopment;
