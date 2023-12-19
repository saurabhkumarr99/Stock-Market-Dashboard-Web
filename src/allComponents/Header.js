import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div data-testid="header-component">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <a className="navbar-brand" href="#">Stock Market Pulse</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/marketPulse"> Market Pulse</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard"> My Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stockDataChart"> Chart1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favDataChart"> Chart2</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login </Link>
                </li>
              </>
            )}
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default Header;
