import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, handleBooking }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    if (id === 'date') {
      dispatch({ type: 'UPDATE', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBooking(formData.time);
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="reservation-form">
      
      {!isSubmitted ? (
        <>
        <h1>Reserve a Table</h1>
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
          <label htmlFor="date">Choose date</label>
          <input type="date" id="date" value={formData.date} onChange={handleChange} required />

          <label htmlFor="time">Choose time</label>
          <select id="time" value={formData.time} onChange={handleChange} required>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input type="number" id="guests" value={formData.guests} onChange={handleChange} min="1" max="10" required />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={formData.occasion} onChange={handleChange} required>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <input type="submit" value="Make Your reservation" />
        </form>
        </>
      ) : (
        <div>
          <h2>Reservation Successful!</h2>
          <div className="reservation-details">
            <p>Date: {formData.date}</p>
            <p>Time: {formData.time}</p>
            <p>Number of Guests: {formData.guests}</p>
            <p>Occasion: {formData.occasion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
