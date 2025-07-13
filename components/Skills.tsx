'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Settings, Globe, Brain, TrendingUp } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "💻 Programming",
      skills: ["HTML", "CSS", "JavaScript", "C", "Python", "Java (learning)"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "⚙️ Tools",
      skills: ["VS Code", "Git", "GitHub", "Linux/Ubuntu"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "🌐 Languages",
      skills: ["English (learning)", "Vietnamese (native)", "Korean (beginner)"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "🧠 Soft Skills",
      skills: ["Self-learning", "Creativity", "Tech-curious", "Growth mindset"]
    }
  ]

  const futureSkills = [
    "Docker", "React Native", "TypeScript", "MySQL/MongoDB", 
    "Firebase", "REST APIs", "Testing", "CI/CD"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🛠️ My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse toolkit that's constantly growing through hands-on learning and real-world projects.
          </p>
        </motion.div>

        {/* Current Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-tag text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-accent-500" />
              <h3 className="text-2xl font-bold text-gray-900">
                📈 Future Skills to Learn
              </h3>
            </div>
            <p className="text-gray-600">
              Always looking ahead - here's what's next on my learning journey
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {futureSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 px-4 py-2 rounded-full text-sm font-medium text-accent-700 hover:from-accent-100 hover:to-primary-100 hover:border-accent-300 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills