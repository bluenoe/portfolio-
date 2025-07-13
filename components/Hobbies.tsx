'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, Palette, Globe, Wrench, Music, Camera } from 'lucide-react'

const Hobbies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const hobbies = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gaming",
      description: "Exploring virtual worlds and strategic thinking through various game genres. Gaming teaches me problem-solving and quick decision-making.",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Learning Languages",
      description: "Currently learning English and Korean. I believe language learning enhances cognitive flexibility and cultural understanding.",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Building Fun Tools",
      description: "Creating small utilities and apps that solve everyday problems or just bring joy. Every tool is a learning opportunity.",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Designing Things",
      description: "From UI mockups to creative graphics, I love bringing ideas to life through visual design and user experience.",
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music & Audio",
      description: "Exploring different genres and occasionally experimenting with audio editing. Music fuels creativity and focus.",
      color: "from-indigo-400 to-purple-400",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Digital Content",
      description: "Creating and editing digital content, from photography to video projects. Visual storytelling is a passion.",
      color: "from-pink-400 to-rose-400",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    }
  ]

  const funFacts = [
    "🎮 Favorite game genre: Strategy and puzzle games",
    "🌏 Dream: To travel and code from different countries",
    "🎨 Design inspiration: Minimalist and modern aesthetics",
    "📱 Always experimenting with new apps and tools",
    "🎵 Coding playlist: Lo-fi hip hop and ambient music",
    "🌱 Believer in continuous learning and growth"
  ]

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-36 h-36 bg-gradient-to-br from-blue-200/30 to-purple-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 right-16 w-44 h-44 bg-gradient-to-br from-purple-200/30 to-cyan-300/30 rounded-full blur-2xl"></div>
      </div>
      <div className="container-max section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent">
            🎨 Hobbies & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Interests</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond coding, I'm passionate about creativity, learning, and exploring new experiences that shape my perspective.
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${hobby.color} text-white group-hover:scale-125 transition-all duration-500 filter group-hover:drop-shadow-lg`}>
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {hobby.title}
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-50 p-8 rounded-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              ✨ Fun Facts About Me
            </h3>
            <p className="text-gray-600">
              A few random things that make me who I am
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-700 text-sm leading-relaxed">
                  {fact}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl max-w-4xl mx-auto">
            <div className="text-4xl mb-4">💭</div>
            <blockquote className="text-xl text-gray-700 font-medium italic mb-4">
              "Life is like coding - it's all about finding creative solutions, 
              learning from bugs, and never stopping the journey of improvement."
            </blockquote>
            <cite className="text-primary-600 font-semibold">- Blu</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hobbies