'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Award, Calendar, Users, Lightbulb } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const educationItems = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Self-Directed DevOps Learning Journey",
      institution: "Online Platforms, Documentation & Community",
      period: "2022 - Present",
      description: "Embarked on an intensive self-taught journey into DevOps, cloud computing, and automation. Consistently engaging with cutting-edge technologies and best practices.",
      highlights: [
        "Online courses on cloud infrastructure, Docker, CI/CD, Linux fundamentals",
        "Hands-on projects and practical problem-solving",
        "Extensive documentation reading and open-source contributions"
      ]
    }
  ]

  const learningPaths = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "🎯 Current Focus",
      items: [
        "Infrastructure as Code (IaC) - Terraform/Ansible",
        "Advanced CI/CD Automation - Jenkins/GitLab CI",
        "Cloud Deployment Strategies (AWS/GCP)",
        "Kubernetes Fundamentals & Orchestration"
      ]
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "🚀 Next Quarter Goals",
      items: [
        "Build multi-container CI/CD pipeline with advanced testing",
        "Deploy full-stack application to cloud with auto-scaling",
        "Integrate Prometheus + Grafana for comprehensive monitoring",
        "Earn a recognized DevOps certification (e.g., AWS Certified DevOps Engineer)"
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            📚 My <span className="gradient-text">DevOps Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My path to becoming a DevOps Engineer is paved with continuous learning, hands-on exploration, and a passion for building resilient systems.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 md:mb-0">
                      {item.title}
                    </h3>
                    <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full w-fit">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-accent-600 font-medium mb-3">
                    {item.institution}
                  </p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="grid md:grid-cols-2 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary-600">
                  {path.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {path.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {path.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.2 + itemIndex * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            💡 Learning Philosophy
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            "I believe the best way to learn is by doing. Every project teaches me something new, 
            every bug makes me a better developer, and every challenge pushes me to grow. 
            The tech world moves fast, and I'm committed to moving with it."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education