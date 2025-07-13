'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Heart, Zap, Globe } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Self-Taught",
      description: "Passionate about learning and growing through hands-on experience"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Gen-Z Energy",
      description: "Bringing fresh perspectives and modern approaches to development"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual",
      description: "Learning English and Korean while being fluent in Vietnamese"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Tech-Curious",
      description: "Always exploring new technologies and building innovative solutions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
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
            🧍 About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
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
                Hey there! I'm <span className="font-semibold text-blue-600">Bao Khanh</span>, a passionate self-taught developer from 
                <span className="font-semibold text-purple-600">Đà Nẵng, Vietnam</span> 🇻🇳. My journey in software 
                development started with curiosity and has evolved into a deep love for creating 
                innovative digital solutions that make a real impact.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Currently diving deep into <span className="font-semibold text-cyan-600">full-stack development</span>, I'm exploring the exciting world 
                of modern web technologies while also expanding my linguistic horizons by learning English 
                and Korean. I believe that great code, like great communication, bridges gaps and 
                connects people across cultures.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me gaming, designing creative projects, or 
                experimenting with cutting-edge tools and frameworks. I'm always excited about the next 
                challenge and the opportunity to grow both personally and professionally in this 
                ever-evolving tech landscape.
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
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
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
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-primary-600 mb-4">
                  {highlight.icon}
                </div>
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
  )
}

export default About