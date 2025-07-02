"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const skills = [
    "C Programming",
    "MATLAB",
    "Verilog & VHDL",
    "Arduino",
    "ESP32",
    "8051 Microcontroller",
    "PCB Design (KiCad)",
    "HTML, CSS, JavaScript",
    "Basics of AI/ML",
    "IoT Applications",
  ];

  return (
    <section className="bg-white py-16 px-6 pt-20 md:pt-32" id="about">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          custom={0}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-violet-600">Me</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A brief overview of my background, skills, and passions.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12 text-gray-700 text-base leading-relaxed">
          {/* Who I Am */}
          <motion.div
            className="flex flex-col-reverse md:flex-row items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            custom={1}
          >
            {/* Text Content */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaLaptopCode className="text-violet-600 text-3xl" />
                Who I Am
              </h3>
              <p>
                I am Riya Chowdhury, currently pursuing B.Tech in Electronics and Communication Engineering at the University of Kalyani. I have a strong passion for embedded systems, IoT, and AI/ML applications.
              </p>
              <p className="mt-3">
                I enjoy working on smart environmental monitoring, automation projects, and applying machine learning techniques to real-world problems.
              </p>
            </div>

            {/* Image with hover animation */}
            <div className="md:w-1/3 flex justify-center">
              <motion.img
                src="/herosectionbg2.jpeg"
                alt="Riya Chowdhury"
                className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-violet-500"
                whileHover={{
                  scale: 1.05,
                  rotate: 3,
                  boxShadow: "0 0 15px 5px rgba(139, 92, 246, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              />
            </div>
          </motion.div>

          {/* What I Believe */}
          <motion.div
            className="flex items-start gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            custom={2}
          >
            <FaLightbulb className="text-violet-600 text-3xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">What I Believe In</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Continuous learning and growth in technology and innovation.</li>
                <li>Building solutions that combine hardware and software for real impact.</li>
                <li>Collaboration and teamwork to create smarter systems.</li>
                <li>Applying AI/ML responsibly to improve everyday life.</li>
              </ul>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="flex items-start gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            custom={3}
          >
            <FaTools className="text-violet-600 text-3xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 bg-violet-100 text-violet-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    <FaCheckCircle className="text-violet-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
