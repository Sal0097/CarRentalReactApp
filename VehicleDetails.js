import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

// Import your vehicle images
import hatchback from './assets/hatchback.jpg';
import sedan from './assets/Sedan.jpg';
import bike from './assets/bike.jpg';
import suv from './assets/suv.jpg';
import van from './assets/van.jpg';
import scooter from './assets/scooter.jpg';

const VehicleDetails = () => {
  const { vehicleId } = useParams();
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const vehicles = [
    { 
      id: 1, 
      name: 'Bike', 
      capacity: 2, 
      type: '1 to 2 seater', 
      image: bike,
      price: 299,
      priceType: 'per day',
      features: ['Fuel Efficient', 'Easy Parking', 'Quick Mobility'],
      specifications: {
        fuelType: 'Petrol',
        transmission: 'Manual',
        mileage: '45 km/l',
        engineCapacity: '150cc'
      },
      description: 'Perfect for solo travelers and short city trips. Our bikes are well-maintained and fuel-efficient.'
    },
    { 
      id: 2, 
      name: 'Scooty', 
      capacity: 2, 
      type: '2 seater', 
      image: scooter,
      price: 199,
      priceType: 'per day',
      features: ['Automatic Transmission', 'Lightweight', 'City Friendly'],
      specifications: {
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: '50 km/l',
        engineCapacity: '125cc'
      },
      description: 'Ideal for city commuting and short distance travel. Easy to ride with automatic transmission.'
    },
    { 
      id: 3, 
      name: 'Hatchback', 
      capacity: 4, 
      type: '4 seater', 
      image: hatchback,
      price: 899,
      priceType: 'per day',
      features: ['Air Conditioning', 'Music System', 'Spacious Interior'],
      specifications: {
        fuelType: 'Petrol',
        transmission: 'Manual/Automatic',
        mileage: '18 km/l',
        engineCapacity: '1200cc'
      },
      description: 'Compact and comfortable car perfect for small families and city driving with modern amenities.'
    },
    { 
      id: 4, 
      name: 'Sedan', 
      capacity: 4, 
      type: '4 seater', 
      image: sedan,
      price: 1299,
      priceType: 'per day',
      features: ['Premium Interior', 'Advanced Safety', 'Smooth Ride'],
      specifications: {
        fuelType: 'Petrol/Diesel',
        transmission: 'Manual/Automatic',
        mileage: '16 km/l',
        engineCapacity: '1500cc'
      },
      description: 'Elegant and comfortable sedan with premium features for business trips and family outings.'
    },
    { 
      id: 5, 
      name: 'SUV', 
      capacity: 6, 
      type: '6 seater', 
      image: suv,
      price: 1899,
      priceType: 'per day',
      features: ['4WD Capability', 'High Ground Clearance', 'Premium Sound System'],
      specifications: {
        fuelType: 'Diesel',
        transmission: 'Manual/Automatic',
        mileage: '14 km/l',
        engineCapacity: '2000cc'
      },
      description: 'Powerful SUV perfect for family trips and adventure travels with superior comfort and safety.'
    },
    { 
      id: 6, 
      name: 'Minivan', 
      capacity: 9, 
      type: '9 seater', 
      image: van,
      price: 2499,
      priceType: 'per day',
      features: ['Spacious Interior', 'Multiple Seating Configurations', 'Large Luggage Space'],
      specifications: {
        fuelType: 'Diesel',
        transmission: 'Manual',
        mileage: '12 km/l',
        engineCapacity: '2500cc'
      },
      description: 'Spacious minivan ideal for large groups and family gatherings with ample luggage space.'
    }
  ];

  const vehicle = vehicles.find(v => v.id === parseInt(vehicleId));

  if (!vehicle) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Vehicle Not Found</h2>
        <button 
          onClick={() => navigate('/select-car')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Back to Vehicle Selection
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/select-car')}
        className="mb-6 text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
      >
        ← Back to Vehicle Selection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vehicle Image */}
        <div className="space-y-4">
          <img 
            src={vehicle.image} 
            alt={vehicle.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          
          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {vehicle.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>
            <p className="text-gray-600 mb-4">{vehicle.type}</p>
            <p className="text-gray-700 mb-4">{vehicle.description}</p>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-indigo-600">₹{vehicle.price}</span>
              <span className="text-gray-500 ml-2">{vehicle.priceType}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600">{vehicle.capacity}</div>
                <div className="text-sm text-gray-600">Seating Capacity</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600">{vehicle.specifications.mileage}</div>
                <div className="text-sm text-gray-600">Mileage</div>
              </div>
            </div>

            <button 
              onClick={() => setShowBookingForm(true)}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Specifications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Specifications</h3>
            <div className="space-y-3">
              {Object.entries(vehicle.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Book {vehicle.name}</h3>
              <button 
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <BookingForm vehicle={vehicle} onClose={() => setShowBookingForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDetails;