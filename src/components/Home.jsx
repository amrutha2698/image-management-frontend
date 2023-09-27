import React from 'react';
import Navbar from './Navbar';
import '../components/Home.css'
import AddImage from './AddImage';

const Home = () => {
  return (
    <div>
        <div className='navbar-container'>
            <Navbar/>
            <AddImage/>
        </div>
    </div>
  )
}

export default Home