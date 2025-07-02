"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const email = "chowdhuryriya59@gmail.com";

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-16 px-6" id="contact">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Get in <span className="text-violet-600">Touch</span>
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-8 text-lg"
          variants={itemVariants}
        >
          I'd love to hear from you! Whether you have a question or want to work
          together, feel free to reach out.
        </motion.p>

        {/* Email Link */}
        <motion.a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 bg-violet-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-violet-700 hover:scale-105 transition-transform duration-300 shadow-md"
          variants={itemVariants}
        >
          <FaEnvelope size={20} /> Email Me
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 text-violet-600 text-3xl mt-10"
          variants={itemVariants}
        >
          <a
            href="https://www.linkedin.com/in/riya-chowdhury-7a5802258/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-violet-800 hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RiyaGithub123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-violet-800 hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
