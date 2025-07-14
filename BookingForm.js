
import React, { useState } from 'react';

const BookingForm = ({ vehicle, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    days: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking confirmed:', form);
    alert(`Booking confirmed for ${vehicle.name}`);
    onClose(); // close modal
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rental Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Number of Days</label>
        <input
          type="number"
          name="days"
          min="1"
          value={form.days}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
