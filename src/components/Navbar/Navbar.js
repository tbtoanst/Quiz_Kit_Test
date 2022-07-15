import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          QUIZWEB
        </Link>
      </div>
      <div className="navbar-menu-container">
        <div className="quiz-menu">
          <Link to="/quiz" className="navbar-menu-item" style={{ textDecoration: 'none' }}>
            QUIZ
          </Link>
        </div>
        <div className="ranking-menu">
          <Link to="/ranking" className="navbar-menu-item" style={{ textDecoration: 'none' }}>
            RANKING
          </Link>
        </div>
        <div className="ranking-menu">
          <Link to="/login" className="navbar-menu-item" style={{ textDecoration: 'none' }}>
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  </>;
}

export default Navbar;
