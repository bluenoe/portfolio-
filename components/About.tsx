"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Heart,
  Zap,
  Globe,
  Cloud,
  Atom,
  GitBranch,
  Rocket,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native Enthusiast",
      description:
        "Passionate about leveraging cloud platforms (AWS, Azure, GCP) for scalable and resilient infrastructure.",
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Automation Advocate",
      description:
        "Driven by automating repetitive tasks and streamlining workflows to boost efficiency and reduce manual errors.",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "CI/CD Champion",
      description:
        "Building robust CI/CD pipelines with tools like GitHub Actions to ensure rapid and reliable software delivery.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Infrastructure as Code (IaC) Pro",
      description:
        "Proficient in defining and managing infrastructure using code (Terraform, Ansible) for consistency and version control.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-2xl"></div>
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
            🧠 About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hey there! I'm{" "}
                <span className="font-semibold text-blue-600">Bao Khanh</span>,
                a self-taught DevOps enthusiast from{" "}
                <span className="font-semibold text-purple-600">
                  Đà Nẵng, Vietnam
                </span>{" "}
                🇻🇳. My tech journey began with curiosity about how code becomes
                a running system — and that curiosity evolved into a passion for
                automation, reliability, and building scalable infrastructures.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Right now, I’m diving deep into DevOps and cloud engineering,
                learning how to bridge the gap between development and
                operations through tools like Docker, Nginx, GitHub Actions, and
                CI/CD pipelines. I love designing environments where deployment
                feels effortless and systems run like clockwork ⏱️.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond the terminal, I’m into gaming, tinkering with Linux
                setups, and experimenting with new automation tools. I’m driven
                by the challenge of making things faster, smarter, and more
                reliable — one container, one pipeline at a time.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Connect! 🚀
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-primary-600 mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
