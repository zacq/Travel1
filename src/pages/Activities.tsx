import { motion } from 'framer-motion'
import { AcademicCapIcon, BoltIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const activities = [
  {
    title: 'Hiking Adventures',
    description: 'Explore breathtaking trails through mountains, forests, and valleys. Experience the beauty of nature up close with our expert guides.',
    icon: AcademicCapIcon,
    image: '/images/jamie-pilgrim-QxdvQuBn9Aw-unsplash.jpg'
  },
  {
    title: 'Extreme Sports',
    description: 'Get your adrenaline pumping with rock climbing, paragliding, and more. Push your limits with our certified instructors.',
    icon: BoltIcon,
    image: '/images/avi-waxman-8kNPOgNSdbM-unsplash.jpg'
  },
  {
    title: 'Cultural Experiences',
    description: 'Immerse yourself in local cultures and traditions. Discover authentic experiences that connect you with local communities.',
    icon: GlobeAltIcon,
    image: '/images/cristina-anne-costello-FxSjjroZlJM-unsplash.jpg'
  }
]

export default function Activities() {
  return (
    <div className="container py-16">
      <motion.h1 
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Adventure Activities
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            className="card group overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
                <activity.icon className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <button className="btn btn-primary w-full hover:bg-primary-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 