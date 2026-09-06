"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  avatar?: string;
  review: string;
}

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    review:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    review:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    id: 3,
    name: "Chinonso Nwachukwu",
    role: "HR Director, FutureTech Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    review:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "CEO of TechVentures",
    review:
      "Tobams Group's consulting and training programs have transformed how our team operates. The leadership workshops and ongoing support provided tremendous value to our staff.",
  },
];

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
  sectionBg?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "Testimonials",
  testimonials = DEFAULT_TESTIMONIALS,
  sectionBg = "bg-white",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // 1 card on mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // 2 cards on tablet
      } else {
        setVisibleCount(3); // 3 cards on desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className={`w-full py-12 md:py-20 ${sectionBg}`}>
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col gap-8 md:gap-12">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-nunito text-black text-center">
          {title}
        </h2>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-full 
                sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="bg-white 
                border border-r-0 border-y-0 border-l-2 border-l-secondary shadow-sm rounded-2xl p-6 sm:p-7 flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-100 bg-[#FAF6F8]">
                      {item.avatar ? (
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={44}
                          height={44}
                          unoptimized
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary/20 flex items-center justify-center font-bold text-primary text-sm">
                          {item.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold text-sm sm:text-base text-gray-900 font-nunito leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-xs text-gray-500 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-normal">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons & Mobile Dots */}
        <div className="flex items-center justify-end sm:justify-end gap-3 mt-2">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-md flex items-center justify-center bg-[#FDECEF] text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer disabled:opacity-40"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-md flex items-center justify-center bg-[#FDECEF] text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer disabled:opacity-40"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
