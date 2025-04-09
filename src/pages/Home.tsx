import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const featuredDestinations = [
    {
      title: 'Patagonia Trails',
      description: 'Explore the rugged beauty of Patagonia\'s untouched wilderness.',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
      link: '/destinations/patagonia',
    },
    {
      title: 'Himalayan Peaks',
      description: 'Conquer the majestic peaks of the Himalayas.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      link: '/destinations/himalayas',
    },
    {
      title: 'Amazon Adventure',
      description: 'Discover the mysteries of the Amazon rainforest.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      link: '/destinations/amazon',
    },
  ];

  const extremeSports = [
    {
      title: 'Rock Climbing',
      description: 'Scale vertical cliffs and experience the thrill of heights.',
      icon: '🧗‍♂️',
    },
    {
      title: 'White Water Rafting',
      description: 'Navigate through raging rapids and wild waters.',
      icon: '🚣‍♂️',
    },
    {
      title: 'Paragliding',
      description: 'Soar through the skies with breathtaking views.',
      icon: '🪂',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/mohammad-alizade-4wzRuAb-KWs-unsplash.jpg)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
            Ready for Your Next Adventure?
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white">
            Join thousands of adventurers who have discovered their perfect journey with Tunda Travels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/activities" className="btn btn-primary">
              Start Planning
            </Link>
            <Link to="/destinations" className="btn btn-secondary">
              View Destinations
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <motion.div
              key={destination.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">{destination.title}</h3>
                <p className="text-secondary-600 mb-4">{destination.description}</p>
                <Link
                  to={destination.link}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extreme Sports */}
      <section className="bg-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Extreme Sports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extremeSports.map((sport, index) => (
              <motion.div
                key={sport.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{sport.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2">{sport.title}</h3>
                <p className="text-secondary-600">{sport.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              Start Your Adventure Today
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of adventure seekers and discover the world's most exciting destinations.
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 