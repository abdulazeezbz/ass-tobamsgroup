import React from 'react'
import WebCard from "@/components/webCard"
import { Zap } from "lucide-react";


const CapacityDevelopment = () => {
  return (
    <WebCard
  title="Capacity Development"
  titleColor="text-black"
  imageSrc="/images/capacity-development.jpg"
  imageShape="rounded-md rounded-tl-[33px]"
  imagePosition="right"
  description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
  listDirection="vertical"
  listIcon={<Zap size={16} className="text-primary fill-primary" />}
  listItems={[
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skills Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources",
  ]}
/>
  )
}





export default CapacityDevelopment;