"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: "📘" },
  { label: "Twitter", href: "#", icon: "🐦" },
  { label: "Instagram", href: "#", icon: "📷" },
  { label: "LinkedIn", href: "#", icon: "💼" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="relative bg-black/90 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Chrysolite Properties
              </span>
            </h3>

            <div className="space-y-2 text-white/70 mb-6">
              <p>Victory House, Garden Estate Road</p>
              <p>Nairobi, Kenya</p>
              <p>Phone: 0707 215211</p>
              <p>Email: info@chrysoliteproperties.co.ke</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-blue-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-white/60">
            © 2025 Chrysolite Properties. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
