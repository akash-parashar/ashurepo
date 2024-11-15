'use client'
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const dates = [
  { title: "Paper Submission", date: "June 15, 2024" },
  { title: "Author Notification", date: "August 1, 2024" },
  { title: "Camera Ready", date: "September 1, 2024" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function ImportantDates() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {dates.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is visible
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.date}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
