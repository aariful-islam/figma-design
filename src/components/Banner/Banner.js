import React from 'react';
import './Banner.css'
import banner from '../../Images/banner (2).jpg'

const Banner = () => {
    return (
        <div className='banner'>
            <img className='banner-image' src={banner} alt="" />
            <h1 className='banner-description'>consectetur adipiscing elit. Sed <br /> eu pharetra.</h1>
            <p className='banner-sub-description'>consectetur adipiscing elit. Sed eu pharetra ante. Nullam <br /> tempus eget ex sit amet congue</p>
            <button className='contact-btn'>conatact us</button>
            
        </div>
    );
};

export default Banner;