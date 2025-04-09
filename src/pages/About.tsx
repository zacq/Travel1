import { motion } from 'framer-motion'
import { GlobeAltIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center mb-12">About Tunda Travels</h1>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 mb-8">
            At Tunda Travels, we believe that travel is more than just visiting new places - it's about creating unforgettable experiences and connecting with the world in meaningful ways.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is to help you discover the most breathtaking destinations and create memories that last a lifetime. Whether you're seeking adventure, relaxation, or cultural immersion, we're here to make your travel dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Global Expertise',
              description: 'With years of experience in the travel industry, we have the knowledge and connections to create perfect itineraries.',
              icon: GlobeAltIcon
            },
            {
              title: 'Personalized Service',
              description: 'We understand that every traveler is unique. Our team works closely with you to create customized travel experiences.',
              icon: UserGroupIcon
            },
            {
              title: 'Sustainable Travel',
              description: 'We are committed to responsible tourism practices that benefit local communities and preserve natural environments.',
              icon: HeartIcon
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card text-center p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              Tunda Travels was founded with a simple yet powerful vision: to transform the way people experience travel. What started as a small team of passionate travelers has grown into a trusted name in the industry, known for our commitment to excellence and personalized service.
            </p>
            <p className="text-gray-600 mb-6">
              Over the years, we've helped thousands of travelers discover new destinations, experience different cultures, and create lasting memories. Our team of expert travel consultants brings together decades of experience and a deep love for exploration.
            </p>
            <p className="text-gray-600">
              Today, Tunda Travels continues to innovate and evolve, always staying true to our core values of quality, integrity, and exceptional customer service. We're proud to be your trusted partner in creating unforgettable travel experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 