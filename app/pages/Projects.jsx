"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMicrochip,
  FaProjectDiagram,
} from "react-icons/fa";

const techIcons = {
  React: <FaProjectDiagram className="inline mr-1" />,
  "Tailwind CSS": <FaProjectDiagram className="inline mr-1" />,
  Vercel: <FaExternalLinkAlt className="inline mr-1" />,
  "Node.js": <FaProjectDiagram className="inline mr-1" />,
  Express: <FaProjectDiagram className="inline mr-1" />,
  Stripe: <FaExternalLinkAlt className="inline mr-1" />,
  Arduino: <FaMicrochip className="inline mr-1" />,
  ESP32: <FaMicrochip className="inline mr-1" />,
  Sensors: <FaMicrochip className="inline mr-1" />,
  "Logic Gates": <FaMicrochip className="inline mr-1" />,
  "Digital Circuits": <FaMicrochip className="inline mr-1" />,
  "Digital Systems": <FaMicrochip className="inline mr-1" />,
  "Power Electronics": <FaMicrochip className="inline mr-1" />,
  IoT: <FaProjectDiagram className="inline mr-1" />,
  "Machine Learning": <FaProjectDiagram className="inline mr-1" />,
};

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Binary to Grey Code Converter",
      description:
        "Designed a logic gate-based converter to transform binary input into grey code.",
      techStack: ["Logic Gates", "Digital Circuits"],
      liveLink: "",
      githubLink: "",
      image: "/binary-to-grey.jpg",
    },
    {
      id: 2,
      title: "Elevator Control System with Emergency Priority",
      description:
        "Implemented an example elevator system using logic gates prioritizing emergency operations.",
      techStack: ["Logic Gates", "Digital Systems"],
      liveLink: "",
      githubLink: "",
      image: "/elevator-system.jpg",
    },
    {
      id: 3,
      title: "Line Following Robot",
      description:
        "Built an autonomous robot using Arduino and ESP32 that follows a predefined line path.",
      techStack: ["Arduino", "ESP32", "Sensors"],
      liveLink: "",
      githubLink: "",
      image: "/line-following-robot.jpg",
    },
    {
      id: 4,
      title: "Battery Management System",
      description:
        "Developed a system for battery charging and discharging management using ESP32.",
      techStack: ["ESP32", "Power Electronics"],
      liveLink: "",
      githubLink: "",
      image: "/battery-management.jpg",
    },
    {
      id: 5,
      title: "Smart Environmental Monitoring and Control System",
      description:
        "Ongoing project integrating ESP32, IoT, and ML for environmental data prediction and control.",
      techStack: ["ESP32", "IoT", "Machine Learning"],
      liveLink: "",
      githubLink: "",
      image: "/smart-environment.jpg",
    },
  ];

  // Parent container variants with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 12px 20px rgba(139, 92, 246, 0.3), 0 8px 17px rgba(139, 92, 246, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const iconHoverVariants = {
    hover: { scale: 1.2, color: "#6b21a8", transition: { duration: 0.3 } },
  };

  const ProjectCard = ({
    title,
    description,
    techStack,
    liveLink,
    githubLink,
    image,
    index,
  }) => (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between cursor-pointer"
      variants={cardVariants}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
    >
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
          loading="lazy"
        />
      )}

      <h3 className="text-xl font-semibold text-violet-600 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <motion.span
            key={tech}
            className="text-violet-700 bg-violet-100 px-3 py-1 rounded-full text-xs font-medium flex items-center"
            whileHover={{ scale: 1.1, color: "#7c3aed" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {techIcons[tech] || <FaProjectDiagram className="inline mr-1" />}
            {tech}
          </motion.span>
        ))}
      </div>

      {(liveLink || githubLink) && (
        <div className="flex gap-4">
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-800 transition flex justify-center items-center gap-2"
              variants={iconHoverVariants}
            >
              View Live <FaExternalLinkAlt />
            </motion.a>
          )}
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-violet-600 text-violet-600 px-4 py-2 rounded-md hover:bg-violet-600 hover:text-white transition flex justify-center items-center gap-2"
              variants={iconHoverVariants}
            >
              GitHub <FaGithub />
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );

  return (
    <section className="bg-white py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          <span className="text-violet-600">Projects</span> I've Built
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${
            projects.length < 3
              ? "flex justify-center gap-10 flex-wrap"
              : "grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map(({ id, ...project }, index) => (
            <ProjectCard key={id} index={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
