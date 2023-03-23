import React from "react";
import { Link } from "react-router-dom";
import './community.css';

const Community = () => {
  return (
    <div className="community-container">
      <h2 className="community-heading">Join Our Community</h2>
      <div className="community-content">
        <div className="community-search">
          <input type="text" placeholder="Search topics and discussions" className="search-input" />
         
        </div>
        <div className="community-categories">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link to="/" className="category-link">Renewable Energy</Link>
      
            </li>
            <li>
              <Link to="/" className="category-link">Energy Efficiency</Link>
           
            </li>
            <li>
              <Link to="/" className="category-link">Carbon Offsets</Link>
  
            </li>
          </ul>
        </div>
        <div className="community-recent-posts">
          <h3>Recent Posts</h3>
          <ul>
            <li>
              <Link to="/" className="post-link">Solar panel installation guide</Link>
              <p className="post-date">January 1, 2022</p>
            </li>
            <li>
              <Link to="/" className="post-link">How to reduce energy consumption at home</Link>
              <p className="post-date">December 15, 2021</p>
            </li>
            <li>
              <Link to="/" className="post-link">Carbon offset programs that actually work</Link>
              <p className="post-date">November 30, 2021</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Community;
