import React from 'react'
import WebCard from "@/components/webCard"
import { Zap } from "lucide-react";


const PersonalisedTraining = () => {
  return (
    <WebCard
  title="Personalised Individual Training"
  titleColor="text-black"
  imageSrc="/images/personalised-individual-training.jpg"
  imageShape="rounded-md rounded-tl-[33px]"
  imagePosition="left"
  description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.  "
  listDirection="vertical"
  listIcon={<Zap size={16} className="text-primary fill-primary" />}
  listItems={[
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management and Productivity",
    "Career Development",
  ]}
/>
  )
}





export default PersonalisedTraining;