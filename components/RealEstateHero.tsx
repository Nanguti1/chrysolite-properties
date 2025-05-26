"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  MapPin,
  Home,
  TrendingUp,
  Star,
  Play,
} from "lucide-react";
import * as THREE from "three";

const RealEstateHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
  } | null>(null);

  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse",
      location: "Manhattan, NY",
      price: "$4.2M",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      type: "Penthouse",
      beds: 4,
      baths: 3,
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Beverly Hills, CA",
      price: "$6.8M",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      type: "Villa",
      beds: 5,
      baths: 4,
    },
    {
      id: 3,
      title: "Glass House",
      location: "Malibu, CA",
      price: "$3.9M",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      type: "Contemporary",
      beds: 3,
      baths: 3,
    },
  ];

  // Three.js setup
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < 2000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );

      colors.push(
        Math.random() * 0.3 + 0.7,
        Math.random() * 0.3 + 0.8,
        Math.random() * 0.2 + 0.9
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.08,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 50;
    sceneRef.current = { scene, camera, renderer, particles };

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white mt-16">
      {/* Three.js Background */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 z-0" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Premium Real Estate Platform
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Find Your
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                    Dream Home
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Discover luxury properties with cutting-edge technology.
                  Experience the future of real estate today.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Enter location..."
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        />
                      </div>
                    </div>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                      <Search className="w-5 h-5" />
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "10K+", label: "Properties" },
                  { number: "500+", label: "Agents" },
                  { number: "98%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Property Carousel */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Carousel Container */}
                <div className="relative h-full">
                  {properties.map((property, index) => (
                    <div
                      key={property.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                        index === currentSlide
                          ? "opacity-100 scale-100 translate-x-0"
                          : index < currentSlide
                          ? "opacity-0 scale-95 -translate-x-full"
                          : "opacity-0 scale-95 translate-x-full"
                      }`}
                    >
                      <div className="relative h-full group cursor-pointer">
                        {/* Background Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${property.image})` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Glassmorphism Card */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform transition-all duration-300 group-hover:bg-white/95 group-hover:scale-105">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                  {property.title}
                                </h3>
                                <div className="flex items-center text-gray-600 mb-3">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {property.location}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold text-gray-900">
                                  {property.price}
                                </div>
                                <div className="text-gray-600 text-sm">
                                  {property.type}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-6 text-gray-600">
                              <div className="flex items-center gap-2">
                                <Home className="w-4 h-4" />
                                <span>{property.beds} beds</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded border border-current" />
                                <span>{property.baths} baths</span>
                              </div>
                              <button className="ml-auto p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                                <Play className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full text-gray-600 hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full text-gray-600 hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {properties.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl animate-pulse delay-1000"
                style={{ animationDuration: "5s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-bounce">
          <TrendingUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default RealEstateHero;
