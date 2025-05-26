"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Karen, Nairobi",
    price: "KSh 45M",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "Kilimani, Nairobi",
    price: "KSh 15M",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft",
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Executive Townhouse",
    location: "Runda, Nairobi",
    price: "KSh 28M",
    bedrooms: 5,
    bathrooms: 4,
    area: "2,800 sq ft",
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    title: "Penthouse Suite",
    location: "Westlands, Nairobi",
    price: "KSh 35M",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,500 sq ft",
    image: "/placeholder.jpg",
  },
];

export default function FeaturedProperties() {
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
            Premium Selection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${property.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                  <span className="text-gray-900 font-semibold">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {property.location}
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-gray-900 font-semibold">
                      {property.bedrooms}
                    </div>
                    <div className="text-gray-600 text-sm">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 font-semibold">
                      {property.bathrooms}
                    </div>
                    <div className="text-gray-600 text-sm">Baths</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 font-semibold">
                      {property.area}
                    </div>
                    <div className="text-gray-600 text-sm">Sq Ft</div>
                  </div>
                </div>

                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
