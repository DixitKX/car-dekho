// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('API_URL'); // Replace with your actual API endpoint
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="p-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search cars..."
        className="p-2 border rounded w-full mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Car Display Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-500">{car.price}</p>
                <p>{car.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">No cars found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
