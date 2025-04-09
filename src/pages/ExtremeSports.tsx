import { useState } from 'react';
import { motion } from 'framer-motion';

const ExtremeSports = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Sports' },
    { id: 'water', name: 'Water Sports' },
    { id: 'air', name: 'Air Sports' },
    { id: 'land', name: 'Land Sports' },
  ];

  const sports = [
    {
      name: 'White Water Rafting',
      category: 'water',
      location: 'Zambezi River, Zambia',
      difficulty: 'extreme',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      description: 'Experience the thrill of navigating through the world\'s most challenging rapids.',
    },
    {
      name: 'Paragliding',
      category: 'air',
      location: 'Interlaken, Switzerland',
      difficulty: 'moderate',
      image: 'https://images.unsplash.com/photo-1517649763962-dc4e729021a7',
      description: 'Soar above stunning alpine landscapes with professional instructors.',
    },
    {
      name: 'Rock Climbing',
      category: 'land',
      location: 'Yosemite, USA',
      difficulty: 'challenging',
      image: 'https://images.unsplash.com/photo-1518609878371-0a8dfd2b1f5c',
      description: 'Scale iconic rock formations in one of the world\'s premier climbing destinations.',
    },
    {
      name: 'Bungee Jumping',
      category: 'air',
      location: 'Victoria Falls, Zimbabwe',
      difficulty: 'extreme',
      image: 'https://images.unsplash.com/photo-1517649763962-dc4e729021a7',
      description: 'Take the ultimate leap of faith from one of the world\'s most spectacular locations.',
    },
    {
      name: 'Surfing',
      category: 'water',
      location: 'Pipeline, Hawaii',
      difficulty: 'challenging',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      description: 'Ride the world\'s most famous waves in the surfing capital of the world.',
    },
    {
      name: 'Mountain Biking',
      category: 'land',
      location: 'Whistler, Canada',
      difficulty: 'moderate',
      image: 'https://images.unsplash.com/photo-1518609878371-0a8dfd2b1f5c',
      description: 'Navigate through world-class mountain bike trails in a stunning alpine setting.',
    },
  ];

  const filteredSports = sports.filter(sport => 
    selectedCategory === 'all' || sport.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-display font-bold mb-8"
      >
        Extreme Sports
      </motion.h1>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSports.map((sport, index) => (
          <motion.div
            key={sport.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group"
          >
            <div className="relative h-48">
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-white font-medium">{sport.location}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-display font-bold">{sport.name}</h3>
                <span className="text-sm px-3 py-1 rounded-full bg-secondary-100 text-secondary-700">
                  {sport.difficulty}
                </span>
              </div>
              <p className="text-secondary-600 mb-4">{sport.description}</p>
              <button className="btn btn-primary w-full">Book Experience</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExtremeSports; 