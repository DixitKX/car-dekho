// src/components/CarDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  const carData = [
    { id: 1, name: 'Toyota Corolla', price: 20000, description: 'A reliable and fuel-efficient car', imageUrl: 'https://via.placeholder.com/300x200?text=Toyota+Corolla' },
    { id: 2, name: 'Honda Civic', price: 22000, description: 'A stylish and well-equipped car', imageUrl: 'https://via.placeholder.com/300x200?text=Honda+Civic' },
    { id: 3, name: 'Ford Mustang', price: 35000, description: 'A powerful and iconic sports car', imageUrl: 'https://via.placeholder.com/300x200?text=Ford+Mustang' },
    { id: 4, name: 'Chevrolet Malibu', price: 24000, description: 'A comfortable and spacious sedan', imageUrl: 'https://via.placeholder.com/300x200?text=Chevrolet+Malibu' },
  ];

  const car = carData.find((car) => car.id === parseInt(id));

  if (!car) {
    return <p>Car not found</p>;
  }

  return (
    <div className="p-5">
      <img className="w-full h-80 object-cover" src={car.imageUrl} alt={car.name} />
      <h2 className="text-3xl font-bold mt-4">{car.name}</h2>
      <p className="text-gray-600 mt-2">{car.description}</p>
      <p className="text-xl font-semibold text-green-600 mt-4">₹{car.price}</p>
    </div>
  );
};

export default CarDetails;
