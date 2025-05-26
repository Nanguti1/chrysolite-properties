"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: "🏠",
    title: "Premium Properties",
    description:
      "Carefully curated selection of high-quality properties in prime locations",
  },
  {
    icon: "💡",
    title: "Expert Guidance",
    description: "Professional advice from experienced real estate experts",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    description:
      "Safe and transparent property transactions with legal compliance",
  },
  {
    icon: "📱",
    title: "Modern Technology",
    description:
      "Cutting-edge tools and platforms for seamless property search",
  },
];

export default function ValueProposition() {
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
            Our Promise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in real estate with our comprehensive services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl p-8"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 mb-6">{value.description}</p>

              {/* Learn More Link */}
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-50 to-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Explore Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
