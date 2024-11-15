"use client"
import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between child animations
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export function Speakers() {
  return (
    <section className="py-20 container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Keynote Speakers
      </motion.h2>
      
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div key={i} variants={cardVariants}>
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <Users className="w-20 h-20 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600">Distinguished Professor</p>
                <p className="text-gray-500">University TBA</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
