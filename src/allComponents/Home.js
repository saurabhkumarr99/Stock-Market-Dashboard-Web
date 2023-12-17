import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Stock Market Dashboard!</h1>
      <p>
        The Stock Market Dashboard is an interactive platform designed to provide users with real-time
        stock market data and powerful analysis tools.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>View different stock categories and sectors</li>
        <li>Create your personalized dashboard</li>
        <li>Real-time data visualization with interactive charts</li>
        <li>Customizable settings for a tailored experience</li>
      </ul>
      <h2>Explore Now:</h2>
      <p>Get started by exploring our features:</p>
      <ul>
        <li>
          <Link to="/categories">View Stock Categories</Link>
        </li>
        <li>
          <Link to="/dashboard">Create Personalized Dashboard</Link>
        </li>
        {/* Add more links to other features/routes */}
      </ul>
    </div>
  );
};

export default Home;
