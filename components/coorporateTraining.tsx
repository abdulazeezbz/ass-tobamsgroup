import React from 'react'
import WebCard from "@/components/webCard"
import { Zap } from "lucide-react";


const CoorporateTraining = () => {
  return (
    <WebCard
  title="Corporate Trainings"
  titleColor="text-black"
  imageSrc="/images/coorporate-training.png"
  imageShape="rounded-md rounded-tl-[33px] rounded-br-[33px]"
  imagePosition="right"
  description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
  listDirection="vertical"
  listIcon={<Zap size={16} className="text-primary fill-primary" />}
  listItems={[
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Customised Training",
  ]}
/>
  )
}

export default CoorporateTraining;