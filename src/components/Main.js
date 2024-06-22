import React, { useReducer, useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';

export const initializeTimes = () => {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return initializeTimes(); // 
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookedTimes, setBookedTimes] = useState([]);

  useEffect(() => {
    const storedBookedTimes = JSON.parse(localStorage.getItem('bookedTimes')) || [];
    setBookedTimes(storedBookedTimes);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookedTimes', JSON.stringify(bookedTimes));
  }, [bookedTimes]);

  const handleBooking = (time) => {
    setBookedTimes((prevBookedTimes) => [...prevBookedTimes, time]);
  };

  return (
    <div className="booking-page">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} handleBooking={handleBooking} />
      <h2>Available Slots</h2>
      <div className="slots">
        {availableTimes.map((time) => (
          <BookingSlot key={time} time={time} isBooked={bookedTimes.includes(time)} />
        ))}
      </div>
    </div>
  );
};

export default Main;
