import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from '../component/navbar';
import Header from '../component/header';
import Content from '../component/content';
import Footer from '../component/footer';

function home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default home;
