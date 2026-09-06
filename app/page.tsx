import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import CoorporateTraining from "@/components/coorporateTraining";
import LearningManagement from "@/components/learningManagement";
import PersonalisedTraining from "@/components/personalisedTraining";
import CapacityDevelopment from "@/components/capacityDevelopment";
import ManagementDevelopment from "@/components/managementDevelopment";
import TransformationHub from "@/components/transformationHub";
import TrainingConsultant from "@/components/trainingConsultant";
import ConsultationBanner from "@/components/consultationBanner";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LearningManagement />
      <CoorporateTraining />
      <PersonalisedTraining />
      <CapacityDevelopment />
      <ManagementDevelopment />
      <TransformationHub />
      <TrainingConsultant />
      <ConsultationBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}





