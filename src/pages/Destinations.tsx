import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, StarIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');

  const continents = [
    { id: 'all', name: 'All Continents' },
    { id: 'africa', name: 'Africa' },
    { id: 'asia', name: 'Asia' },
    { id: 'europe', name: 'Europe' },
    { id: 'north-america', name: 'North America' },
    { id: 'south-america', name: 'South America' },
    { id: 'oceania', name: 'Oceania' },
  ];

  const destinations = [
    {
      title: 'Mount Everest Base Camp',
      location: 'Nepal',
      rating: 4.9,
      duration: '14 days',
      image: '/images/everest.jpg',
      description: 'Trek to the base of the world\'s highest mountain through stunning Himalayan landscapes.'
    },
    {
      title: 'Machu Picchu Trail',
      location: 'Peru',
      rating: 4.8,
      duration: '7 days',
      image: '/images/machu-picchu.jpg',
      description: 'Follow ancient Incan trails to the mystical city in the clouds.'
    },
    {
      title: 'Swiss Alps',
      location: 'Switzerland',
      rating: 4.7,
      duration: '10 days',
      image: '/images/swiss-alps.jpg',
      description: 'Experience the majesty of the Alps with guided hiking and climbing adventures.'
    },
    {
      title: 'Grand Canyon',
      location: 'USA',
      rating: 4.8,
      duration: '5 days',
      image: '/images/grand-canyon.jpg',
      description: 'Explore one of nature\'s greatest wonders through various hiking trails.'
    },
    {
      title: 'Patagonia',
      location: 'Argentina/Chile',
      rating: 4.9,
      duration: '12 days',
      image: '/images/patagonia.jpg',
      description: 'Discover the dramatic landscapes of South America\'s southern frontier.'
    },
    {
      title: 'New Zealand Trails',
      location: 'New Zealand',
      rating: 4.7,
      duration: '15 days',
      image: '/images/new-zealand.jpg',
      description: 'Journey through Middle Earth\'s stunning natural landscapes.'
    }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContinent = selectedContinent === 'all' || destination.location.toLowerCase().includes(selectedContinent.toLowerCase());
    return matchesSearch && matchesContinent;
  });

  return (
    <div className="container py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Popular Destinations</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our handpicked selection of the world's most breathtaking destinations.
          Each location offers unique adventures and unforgettable experiences.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Search Destinations
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full rounded-lg border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Filter by Continent
            </label>
            <select
              value={selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.value)}
              className="w-full rounded-lg border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
            >
              {continents.map((continent) => (
                <option key={continent.id} value={continent.id}>
                  {continent.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((destination, index) => (
          <motion.div
            key={destination.title}
            className="card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{destination.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPinIcon className="w-4 h-4 mr-1" />
                <span className="text-sm">{destination.location}</span>
                <CalendarIcon className="w-4 h-4 ml-4 mr-1" />
                <span className="text-sm">{destination.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <button className="btn btn-primary w-full">View Details</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Destinations; 