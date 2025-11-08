import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

export const WhyUs = () => {
  return (
    <section className="why-us">
    <div className="container">
      <h2 className="main-heading">Why Shop With Us?</h2>


      <ul className="why-us-unOrderList">
        <li>💰 Affordable Price</li>
        <li>👗 Comfortable Daily Wear</li>
        <li>🚚 Delivery all over Pakistan (5-6 Days)</li>
        <li>📦 Watch Box Included</li>
        <li>🔒 Secure Payment / Cash on Delivery</li>
      </ul>
      </div>
    </section>
  )
}

export const FAQ = () => {
  return (
    <section className="faq">
    <div className="container">
      <h2 className="main-heading">FAQ</h2>
      <p><strong>Delivery Time?</strong> 5-6 working days.</p>
      <p><strong>Payment Method?</strong> We offer 2 options: Cash on Delivery OR Advance Full Payment.</p>
      <p><strong>COD?</strong> Yes available. Customer will pay the full delivery charges to the rider at time of delivery.</p>
      <p><strong>Advance Full Payment?</strong> Yes, and if you choose advance full payment → You get 50% OFF on delivery charges.</p>
      <p><strong>Discount Offer?</strong> Shop over 2300 PKR and get a flat 10% discount on your order!</p>
      <p><strong>Warranty?</strong> No warranty but quality checked before packing.</p>
      <p><strong>Waterproof?</strong> Splash resistant only, not fully waterproof.</p>
      </div>
    </section>
  )
}


export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Sahvio Store. All Rights Reserved.</p>


      <div className="social-links">
      <div className="icons">
      <a  href="https://instagram.com/sahviostore" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
      </a>
      </div>

      <div className="icons">
      <a href="https://www.tiktok.com/@sahvio.store?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" >
        <FaTiktok className="footer-icon"/>
      </a>
      </div>
      
      </div>
    </footer>
  )
}
