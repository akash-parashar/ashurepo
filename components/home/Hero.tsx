"use client";

import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    alt: "Medical Technology"
  },
  {
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
    alt: "Healthcare Innovation"
  },
  {
    url: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070",
    alt: "Medical Research"
  }
];

export function Hero() {
  return (
    <div className="relative h-[600px] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-20">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            ICMI 2024
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl border-b-2 mb-6 border-b-blue-300 font-semibold"
          >
            INDIAN CONFERENCE ON <span className="text-cyan-300">MEDTECH</span> INNOVATIONS
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-bold text-xl mb-6"
          >
            The exclusive MedTech Conference in India
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-bold text-xl mb-6"
          >
            <span className="text-cyan-300">ICMI-2024</span> coming to Jodhpur | 22nd to 24th February 2024 
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>October 15-19, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>IIT Jodhpur, India</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Register Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}