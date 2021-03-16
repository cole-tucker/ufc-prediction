import React from 'react';
import { Link } from 'react-router-dom';
import './component.header.css';

const Header = () => {
  return (
    <nav className="container fixed-top">
      <div className="container headerBody">
        <div className="row">
            <div className="col-12 text-center utf-title">UFC Prediction</div>
        </div>
        <div className="row">
            <div className="col-6">
                <Link className="btn btn-link btn-link-active text-decoration-none col-6 nav-item" to="/">
                HOME
                </Link>
                <Link className="btn btn-link text-decoration-none col-6 nav-item" to="/events">
                EVENTS
                </Link>
            </div>
            <div className="col-6">
                <Link className="btn btn-link text-decoration-none col-6 nav-item" to="/rankings">
                RANKINGS
                </Link>
                <Link className="btn btn-link text-decoration-none col-6 nav-item" to="/fighters">
                FIGHTERS
                </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
