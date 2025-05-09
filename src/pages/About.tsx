import { motion } from 'framer-motion'
import { GlobeAltIcon, UserGroupIcon, HeartIcon, CalendarIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    title: "Top 10 Hidden Gems in Southeast Asia",
    excerpt: "Discover the unexplored wonders of Southeast Asia that most tourists never see...",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    image: "/images/southeast-asia.jpg"
  },
  {
    title: "Sustainable Travel: A Guide to Eco-Tourism",
    excerpt: "Learn how to minimize your environmental impact while maximizing your travel experiences...",
    date: "March 10, 2024",
    author: "Michael Chen",
    image: "/images/eco-tourism.jpg"
  },
  {
    title: "Adventure Photography Tips from the Pros",
    excerpt: "Expert photographers share their secrets for capturing stunning travel moments...",
    date: "March 5, 2024",
    author: "David Miller",
    image: "/images/photography.jpg"
  }
];

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

        <div className="max-w-4xl mx-auto mb-20">
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

        {/* New Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="btn btn-primary">
              View All Posts
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 
