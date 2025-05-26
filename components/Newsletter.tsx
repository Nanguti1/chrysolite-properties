"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              Stay Updated
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the latest property updates and exclusive offers directly in
              your inbox
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-4 text-center">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              "Exclusive Property Listings",
              "Market Insights",
              "Special Offers",
              "Investment Tips",
            ].map((benefit, index) => (
              <div
                key={benefit}
                className="text-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="text-gray-600 text-sm">{benefit}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
