import React, { useState, useEffect } from 'react';

const CarList = () => {
  const carData = [
    { id: 1, name: 'Toyota Corolla', price: 20000, description: 'A reliable and fuel-efficient car', imageUrl: 'https://via.placeholder.com/300x200?text=Toyota+Corolla' },
    { id: 2, name: 'Honda Civic', price: 22000, description: 'A stylish and well-equipped car', imageUrl: 'https://via.placeholder.com/300x200?text=Honda+Civic' },
    { id: 3, name: 'Ford Mustang', price: 35000, description: 'A powerful and iconic sports car', imageUrl: 'https://via.placeholder.com/300x200?text=Ford+Mustang' },
    { id: 4, name: 'Chevrolet Malibu', price: 24000, description: 'A comfortable and spacious sedan', imageUrl: 'https://via.placeholder.com/300x200?text=Chevrolet+Malibu' },
  ];

  const [cars, setCars] = useState(carData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      const filteredCars = carData.filter((car) => car.name.toLowerCase().includes(search.toLowerCase()));
      setCars(filteredCars);
    } else {
      setCars(carData);
    }
  }, [search]);

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search cars..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img className="w-full h-40 object-cover" src={car.imageUrl} alt={car.name} />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
              <p className="text-gray-600">{car.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-green-600">₹{car.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
