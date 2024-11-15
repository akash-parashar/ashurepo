'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function AboutMedtech() {
  return (
    <div className="bg-gray-100 text-black py-16 px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-10 text-center text-[#008ad8]"
        >
          WELCOME TO THE 2nd ANNUAL MedTech Conference
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center mb-10"
        >
          XXnd to XXth 12 20XX | IIT Jodhpur
        </motion.p>

        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-semibold mt-8 mb-4"
        >
          Why Attend?
        </motion.h3>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg mb-4"
        >
          A phenomenal pioneer event hosted jointly by the two prestigious institutes of national importance, IIT Jodhpur and AIIMS Jodhpur, focusing on the adoption of newer technologies in the healthcare ecosystem.
        </motion.p>

        <motion.ul
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="list-disc pl-6 text-lg mb-6 space-y-2 font-bold"
        >
          <li>Explore the state of the art in Medical Technology.</li>
          <li>
            Witness cutting-edge research presentations and discussions by extraordinary speakers from India and abroad.
          </li>
          <li>
          Participate in the healthcare hackathon, complete with an immersion experience at AIIMS Jodhpur Hospital and IIT Jodhpur's laboratories.
          
          </li>
        </motion.ul>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            REGISTER HERE
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
