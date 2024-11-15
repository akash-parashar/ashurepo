'use client';

import { motion } from 'framer-motion';

const topics = [
  "Multimodal Signal Processing",
  "Human-Robot Interaction",
  "Affective Computing",
  "Computer Vision",
  "Natural Language Processing",
  "Speech Processing",
  "Virtual and Augmented Reality",
  "Gesture Recognition",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Topics() {
  return (
    <section className="py-1 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Conference Topics
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={cardVariants}
            >
              <h3 className="font-semibold text-lg mb-2">{topic}</h3>
              <p className="text-gray-600">
                Latest research and developments in {topic.toLowerCase()}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
