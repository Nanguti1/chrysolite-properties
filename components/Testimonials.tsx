"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Owner",
    image: "/placeholder.jpg",
    content:
      "Chrysolite Properties made my home buying experience seamless. Their attention to detail and professional service exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Investor",
    image: "/placeholder.jpg",
    content:
      "The team's expertise in the market and their commitment to client satisfaction is unmatched. I've found my perfect investment property.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "/placeholder.jpg",
    content:
      "As a first-time buyer, I was nervous about the process. Chrysolite guided me through every step with patience and professionalism.",
    rating: 5,
  },
];

export default function Testimonials() {
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
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why our clients trust us with their real estate journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl p-8"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-100 group-hover:text-gray-200 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/50 group-hover:via-purple-50/50 group-hover:to-pink-50/50 transition-all duration-500" />

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-50 to-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
