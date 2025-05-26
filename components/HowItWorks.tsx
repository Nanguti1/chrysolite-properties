"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Browse Properties",
    description: "Explore our extensive collection of premium properties",
  },
  {
    number: 2,
    title: "Schedule Viewing",
    description: "Book a personalized viewing with our expert agents",
  },
  {
    number: 3,
    title: "Make an Offer",
    description: "Submit your offer with our guidance and support",
  },
  {
    number: 4,
    title: "Close the Deal",
    description: "Complete the transaction with full legal compliance",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50" />
        <div
          className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ animationDuration: "5s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to finding the perfect property in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-1 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600">
                      {/* Placeholder for step icon */}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
