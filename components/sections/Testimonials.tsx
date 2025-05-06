"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";


export function Testimonials() {
  const testimonials = [{
      id: 1,
      name: "Michelle Carter",
      graduationYear: "2020",
      content: "As a woman entering a male-dominated field, I was nervous, but the instructors at The Hook Up University created such a supportive environment. The techniques I learned have helped me build a loyal clientele who appreciate my unique style.",
      rating: 5,
      currentPosition: "Featured in Modern Barber Magazine",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      isActive: true
    },
    {
      id: 2,
      name: "James Smith",
      graduationYear: "2018",
      content: "The Hook Up University not only taught me the technical skills I needed but also how to run my own shop. I opened my barbershop within a year of graduating, and it's thriving!",
      rating: 4.5,
      currentPosition: "Owner of Smith's Barbershop",
      imageUrl: "https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=1920",
      isActive: false
    },
    {
      id: 3,
      name: "Sarah Johnson",
      graduationYear: "2019",
      content: "I was looking for a school that would not only teach me how to cut hair but also how to build a brand. The Hook Up University provided me with the tools and knowledge I needed to start my own line of hair products.",
      rating: 4,
      currentPosition: "Founder of Sarah's Hair Products",
      imageUrl: "https://images.pexels.com/photos/2552534/pexels-photo-2552534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isActive: false
    }]
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSlide = (slideIndex: number) => {
    if (!sliderRef.current || !testimonials) return;
    
    const slideWidth = sliderRef.current.offsetWidth;
    if (sliderRef.current.parentElement) {
      sliderRef.current.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    if (!testimonials) return;
    const nextIndex = (currentSlide + 1) % testimonials.length;
    goToSlide(nextIndex);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide, testimonials]);

  // Handle window resize to ensure slide positioning is correct
  useEffect(() => {
    const handleResize = () => goToSlide(currentSlide);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="font-[Permanent\+Marker] text-amber-500 text-xl mb-2">Our Graduates</div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Our students leave The Hook Up University ready to make their mark in the barbering industry. Heres what some of our alumni have to say.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
                {testimonials?.map((testimonial) => (
                  <div key={testimonial.id} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-gray-800 rounded-lg p-8 h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            width={1080}
                            height={1000}
                            src={testimonial.imageUrl || "https://via.placeholder.com/100"}
                            alt={`Testimonial from ${testimonial.name}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold font-heading text-lg">{testimonial.name}</h4>
                          <p className="text-amber-500">Class of {testimonial.graduationYear}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-gray-300 italic">
                          {`"${testimonial.content}"`}
                        </p>
                      </div>
                      <p className="text-sm text-gray-400">{testimonial.currentPosition}</p>
                    </div>
                  </div>
                ))}
          </div>

        </div>
      </div>
    </section>
  );
}