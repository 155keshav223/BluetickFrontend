import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to BlueTick</h1>
      <p>
        Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
      </p>
      <p>
        Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions
      </p>
      <a href="https://www.bluetickconsultants.com/generative-ai.html" target="_blank" rel="noopener noreferrer">
        <button>To know more about us</button>
      </a>
    </div>
  );
};

export default Home;
