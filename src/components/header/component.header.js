import React from 'react';
import { Link } from 'react-router-dom';
import './component.header.css';

const Header = () => {
  return (
    <div className="container">
      <div className="container headerBody">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 text-center font-size-30 utf-title">UFC</div>
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-10">
            <Link className="btn btn-link btn-link-active text-decoration-none " to="/">
              HOME
            </Link>
            <Link className="btn btn-link text-decoration-none" to="/events">
              EVENTS
            </Link>
            <Link className="btn btn-link text-decoration-none" to="/rankings">
              RANKINGS
            </Link>
            <Link className="btn btn-link text-decoration-none" to="/fighters">
              FIGHTERS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
