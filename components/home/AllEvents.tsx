'use client'
import React from "react";
import { AnimatedTestimonialsDemo } from "./Events";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AllEvents = () => {
  return (
    <div className="mt-10">
      <motion.div
        className="flex justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-5xl text-[#008ad8]">A UNIQUE SET OF EVENTS</p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <AnimatedTestimonialsDemo />
      </motion.div>
    </div>
  );
};

export default AllEvents;
