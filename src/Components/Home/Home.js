import React from 'react';
import './Home.css';
import Header from './Header';
import HomeTopCarousel from './HomeTopCarousel';
import Sidebar from './Sidebar';

const Home = () => {
      return (
            <div>
                  <Header />
                  <div className="home">
                        <Sidebar />
                        <HomeTopCarousel />
                  </div>
            </div>
      );
};

export default Home;