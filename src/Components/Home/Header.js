import { AddIcCall, Drafts, Facebook, Instagram, LinkedIn, SearchOutlined, Twitter } from '@material-ui/icons';
import React from 'react';
import './Header.css';

const Header = () => {
      return (
            <div className="header">
                  <div className="contract-address">
                        <div className="number">
                              <AddIcCall className="icon" />
                              <p>+ 0487435945</p>
                        </div>
                        <div className="address">
                              <Drafts className="icon" />
                              <p>derk.info@example.com</p>
                        </div>
                  </div>
                  <div className="search-bar">
                        <form action="" className="search-content">
                              <input type="search" name="search" id="search" placeholder="search..." />
                              <button type="submit"><SearchOutlined /></button>
                        </form>
                  </div>
                  <div className="social-icon">
                        <a href=""><Facebook className="icons" /></a>
                        <a href=""><Twitter className="icons" /></a>
                        <a href=""><LinkedIn className="icons" /></a>
                        <a href=""><Instagram className="icons" /></a>
                  </div>
            </div>
      );
};

export default Header;