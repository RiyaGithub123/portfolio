'use client';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black  text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Centered Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mx-auto"
          >
            <h2 className="text-2xl font-bold text-violet-600 hover:text-violet-800 transition-colors duration-300 cursor-pointer">
              Riya
            </h2>
            <p className="mt-2 text-sm text-white max-w-sm mx-auto">
              Thank you for visiting my portfolio. Let's connect!
            </p>
            <div className="flex justify-center gap-4 mt-4 text-violet-600 text-xl">
              {/* <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/riya-chowdhury-7a5802258/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-violet-800 transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/RiyaGithub123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-violet-800 transition-colors duration-300"
              >
                <FaGithub />
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-100 mt-10 pt-6 text-sm text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          © {new Date().getFullYear()} Riya. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
