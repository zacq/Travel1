import { useState } from 'react';
import { motion } from 'framer-motion';

const HikingTrails = () => {
  const [difficulty, setDifficulty] = useState('all');
  const [duration, setDuration] = useState('all');

  const trails = [
    {
      name: 'Inca Trail to Machu Picchu',
      location: 'Peru',
      difficulty: 'moderate',
      duration: '4 days',
      elevation: '4,200m',
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
      description: 'Follow the ancient path of the Incas through stunning mountain scenery to the iconic Machu Picchu.',
    },
    {
      name: 'Mount Kilimanjaro',
      location: 'Tanzania',
      difficulty: 'challenging',
      duration: '7 days',
      elevation: '5,895m',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
      description: 'Conquer Africa\'s highest peak through diverse ecosystems and breathtaking views.',
    },
    {
      name: 'Tongariro Alpine Crossing',
      location: 'New Zealand',
      difficulty: 'moderate',
      duration: '1 day',
      elevation: '1,886m',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad',
      description: 'Experience volcanic landscapes, emerald lakes, and stunning alpine scenery.',
    },
  ];

  const filteredTrails = trails.filter(trail => {
    if (difficulty !== 'all' && trail.difficulty !== difficulty) return false;
    if (duration !== 'all' && trail.duration !== duration) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-display font-bold mb-8"
      >
        Hiking Trails
      </motion.h1>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full rounded-lg border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="challenging">Challenging</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-lg border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="all">All Durations</option>
              <option value="1 day">1 Day</option>
              <option value="2-3 days">2-3 Days</option>
              <option value="4+ days">4+ Days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Trail List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTrails.map((trail, index) => (
          <motion.div
            key={trail.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="relative h-48">
              <img
                src={trail.image}
                alt={trail.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-display font-bold">{trail.name}</h3>
                <span className="text-sm text-secondary-600">{trail.location}</span>
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="text-sm">
                  <span className="font-medium">Difficulty:</span> {trail.difficulty}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Duration:</span> {trail.duration}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Elevation:</span> {trail.elevation}
                </div>
              </div>
              <p className="text-secondary-600 mb-4">{trail.description}</p>
              <button className="btn btn-primary w-full">Learn More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HikingTrails; 