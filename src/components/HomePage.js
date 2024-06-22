import React from 'react';
import '../App.css';
import deliciousFood from '../assets/restauranfood.jpg';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';
import deliveryBike from '../assets/delivery-bike.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/book');
  };

  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned <br/> Mediterranean restaurant,<br/> focused on traditional<br/> recipes served with a modern <br/>twist.
          </p>
          <button className="reserve-button" onClick={handleReserveClick}>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={deliciousFood} alt="Delicious food" width={330} height={230}/>
        </div>
      </header>

      <section className="specials">
        <div className='specials-header'>
          <h2>This week's specials!</h2>
          <button className="online-menu-button">Online Menu</button>
        </div>
        <div className="specials-list">
          <div className="special-item">
            <img src={greekSalad} alt="Greek salad" />
            <div className='item-header'>
              <h3>Greek Salad</h3>
              <p className="price">$12.99</p>
            </div>
            <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <button className="order-button">Order a delivery <img src={deliveryBike} width={5} alt="delivery-bike-icon"/></button> 
          </div>
          <div className="special-item">
            <img src={bruchetta} alt="Bruschetta" />
            <div className='item-header'>
              <h3>Bruschetta</h3>
              <p className="price">$5.99</p>
            </div>
            <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <button className="order-button">Order a delivery <img src={deliveryBike} width={5} alt="delivery-bike-icon"/></button> 
          </div>
          <div className="special-item">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className='item-header'>
              <h3>Lemon Dessert</h3>
              <p className="price">$5.00</p>
            </div>
            <p className="description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <button className="order-button">Order a delivery <img src={deliveryBike} width={5} alt="delivery-bike-icon"/></button> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
