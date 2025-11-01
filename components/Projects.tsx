"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "BluMonitor",
      description:
        "A robust Python-based log monitoring tool, containerized with Docker for easy deployment and scalability. Ensures system health and proactive issue detection.",
      image: "/api/placeholder/400/250", // Placeholder image
      techStack: ["Python", "Docker", "Monitoring", "Automation"],
      githubLink: "https://github.com/bluenoe/blumonitor", // Example link
      liveLink: "#", // No live link for a backend tool
      category: "DevOps Tool",
    },
    {
      title: "BluApp",
      description:
        "A Node.js web application featuring an Nginx reverse proxy for efficient load balancing and a fully automated CI/CD pipeline for seamless deployments.",
      image: "/api/placeholder/400/250", // Placeholder image
      techStack: ["Node.js", "Nginx", "CI/CD", "GitHub Actions", "Deployment"],
      githubLink: "https://github.com/bluenoe/bluapp", // Example link
      liveLink: "#", // Example live link
      category: "Web Application",
    },
    {
      title: "BluChat",
      description:
        "A real-time chat application, fully containerized using Docker Compose with MongoDB for persistent data. Demonstrates multi-container orchestration and scalability.",
      image: "/api/placeholder/400/250", // Placeholder image
      techStack: [
        "Docker Compose",
        "MongoDB",
        "Containerization",
        "Orchestration",
        "Scalability",
      ],
      githubLink: "https://github.com/bluenoe/bluchat", // Example link
      liveLink: "#", // Example live link
      category: "Containerized App",
    },
    {
      title: "BluBooth",
      description:
        "A modern frontend photobooth built with Next.js, integrating with a local API. Showcases efficient deployment practices and responsive design.",
      image: "/api/placeholder/400/250", // Placeholder image
      techStack: ["Next.js", "React", "API Integration", "Deployment"],
      githubLink: "https://github.com/bluenoe/blubooth", // Example link
      liveLink: "#", // Example live link
      category: "Frontend App",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-blue-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-cyan-200/30 to-purple-300/30 rounded-full blur-2xl"></div>
      </div>
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            🚀 My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevOps Adventures
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exploring the world of automation, cloud, and robust infrastructure
            through hands-on projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-white/50"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-semibold text-lg">
                  🚀 {project.title}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-700">
                      Tech Stack:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-3 py-2 rounded-full text-sm font-medium border border-blue-100 hover:border-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/bluenoe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
