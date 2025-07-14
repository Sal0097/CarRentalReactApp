import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hatchback from './assets/hatchback.jpg';
import sedan from './assets/Sedan.jpg';
import bike from './assets/bike.jpg';
import suv from './assets/suv.jpg';
import van from './assets/van.jpg';
import scooter from './assets/scooter.jpg';

const VehicleRecommendation = () => {
  const [passengers, setPassengers] = useState(0);

  const vehicles = [
    { id: 1, name: 'Bike', capacity: 2, type: '1 to 2 seater', image: bike, price: 299 },
    { id: 2, name: 'Scooty', capacity: 2, type: '2 seater', image: scooter, price: 199 },
    { id: 3, name: 'Hatchback', capacity: 4, type: '4 seater', image: hatchback, price: 899 },
    { id: 4, name: 'Sedan', capacity: 4, type: '4 seater', image: sedan, price: 1299 },
    { id: 5, name: 'SUV', capacity: 6, type: '6 seater', image: suv, price: 1899 },
    { id: 6, name: 'Minivan', capacity: 9, type: '9 seater', image: van, price: 2499 },
  ];

  const getRecommendedVehicles = () => {
    return vehicles.filter(vehicle => vehicle.capacity >= passengers);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-md shadow-md mt-8 mb-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Car Rental</h1>

      <div className="mb-8 max-w-md mx-auto">
        <label className="block mb-2 text-gray-800 dark:text-gray-200 font-medium">
          Number of Passengers:
        </label>
        <input
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
          min="1"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter number of passengers"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
        {passengers > 0 ? `Suggested Vehicles for ${passengers} passenger${passengers > 1 ? 's' : ''}` : 'All Available Vehicles'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getRecommendedVehicles().length > 0 ? (
          getRecommendedVehicles().map(vehicle => (
            <div key={vehicle.id} className="relative group bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Vehicle Image + Overlay */}
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ₹{vehicle.price}/day
                </div>

                {/* Enquire Now hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <Link
                    to={`/vehicle/${vehicle.id}`}
                    className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {vehicle.type}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    <span className="text-sm">{vehicle.capacity} seats</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    to={`/vehicle/${vehicle.id}`}
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg text-center hover:bg-indigo-700 transition duration-300 font-medium"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/vehicle/${vehicle.id}`}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition duration-300 font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No suitable vehicles found for {passengers} passenger{passengers > 1 ? 's' : ''}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Try adjusting the number of passengers
            </p>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-indigo-600">{vehicles.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Vehicle Types</div>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">₹199+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Starting From</div>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">24/7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default VehicleRecommendation;
