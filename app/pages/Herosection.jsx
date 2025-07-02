'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-black  pb-12 pt-20 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/herosectionbg1.jpeg"
            alt="Riya Chowdhury"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right: Intro Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Hi, I'm <span className="text-violet-600">Riya</span> 👋
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-lg mx-auto md:mx-0">
            I'm a <span className="font-semibold text-violet-600">B.Tech ECE</span> student at University of Kalyani, passionate about IoT, AI/ML, and embedded systems.
          </p>
          <p className="text-md text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
            Skilled in circuit design, microcontrollers (Arduino, ESP32), and developing smart environmental and automation projects.
          </p>
          <a
            href="/resume_684bccf59f1818.88522270.pdf"
            download
            className="inline-block bg-violet-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-violet-800 transition"
          >
            Download My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
